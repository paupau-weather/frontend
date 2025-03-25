import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@/utils/password"
import { User } from "next-auth"

export const PauPauCredentials = Credentials({
    name: "Credentials",
    credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
        let user = null
        const pwHash = saltAndHashPassword(credentials.password as string)

        if (credentials.email === "admin@ya.ru" && pwHash === saltAndHashPassword("admin")) {
            // await getUserFromDb(credentials.email, pwHash)
            user = { id: "1", name: "admin", email: credentials.email }
        }

        if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            // throw new Error("Invalid credentials.")
          }
   
          // return user object with their profile data
          return user as User

    }
})