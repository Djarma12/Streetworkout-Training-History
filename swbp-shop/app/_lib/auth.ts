import NextAuth from "next-auth";

import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import { getUser } from "./apiAuth";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  }) as Adapter,
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    //   async session({ session, user }) {
    //     const signingSecret = process.env.SUPABASE_JWT_SECRET;
    //     console.log(session);
    //     if (signingSecret) {
    //       const payload = {
    //         aud: "authenticated",
    //         exp: Math.floor(new Date(session.expires).getTime() / 1000),
    //         sub: user.id,
    //         email: user.email,
    //         role: "authenticated",
    //       };
    //       (session as { supabaseAccessToken?: string }).supabaseAccessToken =
    //         jwt.sign(payload, signingSecret);
    //     }
    //     return session;
    //   },
    async signIn({ user, account, profile }) {
      try {
        if (!user.email) throw new Error();
        const existingGuest = await getUser(user.email);
        if (!existingGuest) {
          //   await createUser({ email: user.email, fullName: user.name });
        }
        console.log("User:", user);
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      console.log("Sess: ", session);
      const guest = await getUser(session.user.email);
      console.log("Guest: ", guest);
      if (guest) {
        (session.user as { userId?: number }).userId = guest.id;
      }
      return session;
    },
  },
});
