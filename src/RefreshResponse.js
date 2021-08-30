class RefreshResponse {
    /**
     * 
     * @param {strubg} accessToken 
     * @param {string} clientToken 
     * @param {{id: string, name: string}} selectedProfile 
     * @param {{id: string, properties: {name: string, value: string}[]}} user 
     */
    constructor(accessToken, clientToken, selectedProfile, user) {
        this.accessToken = accessToken;
        this.clientToken = clientToken;
        this.selectedProfile = {
            id: selectedProfile.id ?? null,
            name: selectedProfile.name ?? null,
        };
        this.user = {
            id: user.id,
            properties = user.properties.map((prop) => {return {
                name: prop.name ?? null,
                value: prop.value ?? null
            }}),
        }
    }
}
module.exports = RefreshResponse;