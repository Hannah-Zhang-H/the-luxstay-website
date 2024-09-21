import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // callbacks: {
  //   authorized({ auth, request }) {
  //     return !!auth?.user;
  //   },
  // },
  callbacks: {
    async session({ session, token, user }) {
      // Customize session logic to ensure user information in the session
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // If logs out
      console.log(url);
      if (url === baseUrl || url.includes("/signout")) {
        return baseUrl; // redirect to the default page
      }
      // Redirect to account page or other page after successful login
      return `${baseUrl}/account`;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        // If user does not exist, then direct the user to sign in
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });
        return true;
      } catch {
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
  },
};

// // The following way is not working
// export const {
//   auth,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
