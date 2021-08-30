class AuthenticationProperty {
    /**
     * 
     * @param {string} name 
     * @param {string} value 
     */
    constructor(name, value) {
        this.name = name;
        this.value = value;
    };
};
class AuthenticationProfile {
    /**
     * 
     * @param {string} name 
     * @param {string} id 
     */
    constructor(name, id) {
        this.name = name;
        this.id = id;
    };
};
class AuththenticationResponse {
    /**
     * 
     * @param {{username: string, properties: AuthenticationProperty[], id: string}} user 
     * @param {string} clientToken 
     * @param {string} accessToken 
     * @param {AuthenticationProfile[]} availableProfiles 
     * @param {AuthenticationProfile} selectedProfile 
     */
    constructor(user, clientToken, accessToken, availableProfiles, selectedProfile) {
        this.user = {
            username: user.username ?? null,
            properties: user.properties.map((d) => {return new AuthenticationProperty(d.name, d.value)}),
            id: user.id ?? null,
        };
        this.clientToken = clientToken;
        this.accessToken = accessToken;
        this.availableProfiles = availableProfiles.map((profile) => {return new AuthenticationProfile(profile.name, profile.id)});
        this.selectedProfile = new AuthenticationProfile(selectedProfile.name, selectedProfile.id);
    };
};
module.exports = AuththenticationResponse;