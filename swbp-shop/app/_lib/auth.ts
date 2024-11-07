import NextAuth from "next-auth";

import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";
import Google from "next-auth/providers/google";
import { getUser } from "./apiAuth";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [Google],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET;
      console.log(session);
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        };
        (session as { supabaseAccessToken?: string }).supabaseAccessToken =
          jwt.sign(payload, signingSecret);
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      try {
        console.log(user);
        if (!user.email) throw new Error();
        const existingGuest = await getUser(user.email);
        if (!existingGuest) {
          //   await createUser({ email: user.email, fullName: user.name });
        }
        return true;
      } catch {
        return false;
      }
    },
    // async session({ session, user }) {
    //   const guest = await getUser(session.user.email);
    //   if (guest) {
    //     (session.user as { userId?: number }).userId = guest.id;
    //   }
    //   return session;
    // },
  },
});
