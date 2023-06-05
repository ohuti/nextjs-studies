import NextAuth from 'next-auth/next'
import KeycloakProvider from 'next-auth/providers/keycloak'

const handler = NextAuth({
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_CLIENT_ID as string,
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
            issuer: process.env.KEYCLOAK_URL
        })
    ]
})

export { handler as GET, handler as POST }
