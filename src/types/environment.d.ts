declare global {
    namespace NodeJS {
        interface ProcessEnv {
            KEYCLOAK_URL: string
            KEYCLOAK_CLIENT_ID: string
            KEYCLOAK_CLIENT_SECRET: string

            MONGODB_URI: string
            
            NEXTAUTH_URL: string
            NEXTAUTH_URL_INTERNAL: string
            NEXTAUTH_SECRET: string
        }
    }
}
