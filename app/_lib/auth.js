import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
    async session({ session, token }) {
      // Customize session logic to ensure user information in the session
      return session;
    },
    async redirect({ url, baseUrl }) {
      // If logs out
      console.log(url);
      if (url === baseUrl || url.includes("/signout")) {
        return baseUrl; // 默认重定向到主页
      }
      // Redirect to account page or other page after successful login
      return `${baseUrl}/account`;
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
