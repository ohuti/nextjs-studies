import NextAuth from 'next-auth/next'
import KeycloakProvider from 'next-auth/providers/keycloak'

import { user as User } from '@models/user'
import { connectToDB } from '@utils/database'

const handler = NextAuth({
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_CLIENT_ID,
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({ email: session.user.email })
        session.user.id = sessionUser._id.toString()
        return session
    },
    async signin({ profile }) {
        try {
            await connectToDB()
            const userExists = await User.findOne({ email: profile.email })
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.username.replace(' ', '')
                })
            }
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
})

export { handler as GET, handler as POST }
