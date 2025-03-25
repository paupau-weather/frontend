import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PauPauCredentials } from "@/lib/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, PauPauCredentials],

})