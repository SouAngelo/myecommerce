import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId:  GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],

    secret: process.env.JWT_SECRET,

  
})

