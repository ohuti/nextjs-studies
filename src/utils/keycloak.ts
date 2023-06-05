import Keycloak from "keycloak-js"

export const connectToKeycloak = async () => {
    const keycloak = new Keycloak({
        clientId: process.env.KEYCLOAK_CLIENT_ID as string,
        realm: 'Promptopia'
    })
    try {
        await keycloak.init({}).then()
        console.log(keycloak.authenticated)
    } catch (error) {
        console.error(error)
    }
    return keycloak
}
