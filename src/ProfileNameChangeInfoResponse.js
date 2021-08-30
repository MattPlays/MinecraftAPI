class ProfileNameChangeInfoResponse {
    /**
     * 
     * @param {string} changedAt 
     * @param {string} createdAt 
     * @param {boolean} nameChangeAllowed 
     */
    constructor(changedAt, createdAt, nameChangeAllowed) {
        this.changedAt = changedAt;
        this.createdAt = createdAt;
        this.nameChangeAllowed = nameChangeAllowed
    }
}
module.exports= ProfileNameChangeInfoResponse;