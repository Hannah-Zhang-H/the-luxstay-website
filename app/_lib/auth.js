import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

// The following way is not working
// export const {
//   auth,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

//  Or use this way
// const handler = NextAuth(authConfig);
// export { handler as GET, handler as POST };

// Or use this way
export default NextAuth(authConfig);
