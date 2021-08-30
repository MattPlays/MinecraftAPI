class ProfileInfoResponse {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {{id: string, state: string, url: string, variant: string}[]} skins 
     * @param {[]} capes 
     */
    constructor(id, name, skins, capes) {
        this.id = id;
        this.name = name;
        this.skins = skins.map((skin) => {return {
            id: skin.id,
            state: skin.state,
            url: skin.url,
            variant: skin.variant,
        }});
        this.capes = capes ?? null;
    }
}
module.exports = ProfileInfoResponse;