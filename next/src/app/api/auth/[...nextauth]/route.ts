import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = { ...user, username: user.email?.split("@")[0] || "" };
      }
      console.log(session);

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
