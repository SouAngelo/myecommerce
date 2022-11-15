import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

interface GoogleProps{
    clientId: string | null;
    clientSecret: string | null;
}

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    secret: process.env.JWT_SECRET,

  
})

