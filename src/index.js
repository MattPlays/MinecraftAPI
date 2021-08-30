const fetch = require('node-fetch');
const ServerStatusResponse = require("./ServerStatusResponse");
const AuththenticationResponse = require("./AuthenticationResponse");
const RefreshResponse = require("./RefreshResponse");
const ProfileInfoResponse = require("./ProfileInfoResponse");
const ProfileNameChangeInfoResponse = require("./ProfileNameChangeInfoResponse");
const UUIDResponse = require("./UUIDResponse");
class MinecraftAPI {
    constructor() {
        this.api = "https://api.mojang.com/";
        this.statusServer = "https://status.mojang.com/check"
        this.authServer = "https://authserver.mojang.com/"
        this.sessonServer = "https://sessionserver.mojang.com/"
        this.apiServices = "https://api.minecraftservices.com/"
        this.offical = true
    }
    /**
     * 
     * @returns {Promise<ServerStatusResponse>}
     */
    GetAPIStatus() {
        return fetch(this.statusServer, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new ServerStatusResponse(data);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<AuththenticationResponse>}
     */
    Authenticate(username, password) {
        let url = this.authServer + "authenticate"
        let payload = {
            "agent": {
                "name": "Minecraft",
                "Version": 1
            },
            "username": username,
            "password": password 
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {
            return new AuththenticationResponse(data.user, data.clientToken, data.accessToken, data.availableProfiles, data.selectedProfile);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @param {string} clientToken 
     * @param {string} profileIdentifier 
     * @param {string} playerName 
     * @returns {Promise<RefreshResponse>}
     */
    Refresh(accessToken, clientToken, profileIdentifier, playerName) {
        let url = this.authServer + "refresh";
        let payload = {
            "accessToken": accessToken,
            "clientToken": clientToken,
            "selectedProfile": {
                "id": profileIdentifier,
                "name": playerName
            }
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {
            return new RefreshResponse(data.accessToken, data.clientToken, data.selectedProfile, data.user);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @param {string} clientToken 
     * @returns {Promise<any>}
     */
    Validate(accessToken, clientToken) {
        let url = this.authServer + "validate";
        let payload = {
            "accessToken": accessToken,
            "clientToken": clientToken ?? null
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<any>}
     */
    Signout(username, password) {
        let url = this.authServer + "validate";
        let payload = {
            "username": username,
            "password": password
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
         }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @param {string} clientToken 
     * @returns {Promise<any>}
     */
    Invalidate(accessToken, clientToken) {
        let url = this.authServer + "invalidate";
        let payload = {
            "accessToken": accessToken,
            "clientToken": clientToken
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} username 
     * @returns {Promise<UUIDResponse>}
     */
    UsernameToUUID(username) {
        let url = this.api + "users/profiles/minecraft/" + username; 
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new UUIDResponse(data.name, data.id);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string[]} usernames 
     * @returns {Promise<UUIDResponse[]>}
     */
    UsernamesToUUIDs(usernames) { 
        let url = this.api + "profiles/minecraft";
        let payload = usernames ?? [];
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new UUIDResponse(d.name, d.id)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} uuid 
     * @returns {Promise<{name: string, changedToAt: number}[]>}
     */
    UUIDToNameHistory(uuid) {
        let url = this.api + `user/profiles/${uuid}/names`
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US, en;q=0.9",
                "content-type": "application/json"
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return {
                name: d.name ?? null,
                changedToAt: d.changedToAt ?? null
            }})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} uuid 
     * @returns {Promise<{id: string, name: string, properties: {name: string, value: string, signature: string}[], legacy: boolean}>}
     */
    UUIDToSkin(uuid) {
        let url = `${this.sessonServer}session/minecraft/profile/${uuid}`
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US, en;q=0.9",
                "content-type": "application/json"
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return {
                id: data.id ?? null,
                name: data.name ?? null,
                properties: data.properties ?? null,
                legacy: data.legacy ?? null
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @returns {string[]}
     */
    GetBlockedServers() {
        let url = this.sessonServer + "blockedservers"
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.text()).then((d) => {return d.split("\n")}).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {"item_sold_minecraft" | "prepaid_card_redeemed_minecraft"} metricKeys 
     * @returns {Promise<{total: number, last24h: number, saleVelocityPerSeconds: number}>}
     */
    GetStatistics(metricKeys) {
        let url = this.api + "orders/statistics"
        let payload = {
            "metricKeys": metricKeys
        }
        return fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US, en;q=0.9",
                "content-type": "application/json"
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {
            return {
                total: data.total ?? null,
                last24h: data.last24h ?? null,
                saleVelocityPerSeconds: data.saleVelocityPerSeconds ?? null,
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @returns {Promise<ProfileInfoResponse>}
     */
    GetProfileInfo(accessToken) {
        let url = this.apiServices + "/minecraft/profile"
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new ProfileInfoResponse(data.id, data.name, data.skins, data.capes);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @returns {Promise<ProfileNameChangeInfoResponse>}
     */
    GetProfileNameChangeInfo(accessToken) {
        let url = this.apiServices + "/minecraft/profile/namechange"
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new ProfileNameChangeInfoResponse(data.changedAt, data.createdAt, data.nameChangeAllowed);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} name 
     * @param {string} accessToken 
     * @returns {Promise<{status: "DUPLICATE" | "AVAILABLE"}>}
     */
    CheckNameAvailability(name, accessToken) {
        let url = this.apiServices + `/minecraft/profile/name/${name}/available`
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return {
                status: data.status ?? ("DUPLICATE" | "AVAILABLE"),
            };
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} newName 
     * @param {string} accessToken 
     * @returns {Promise<ProfileInfoResponse>}
     */
    ChangeName(newName, accessToken) {
        let url = this.apiServices + `/minecraft/profile/name/${newName}`
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "PUT",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new ProfileInfoResponse(data.id, data.name, data.skins, data.capes);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {"classic" | "slim"} variant 
     * @param {string} skinUrl 
     * @param {string} accessToken 
     * @returns {Promise<any>}
     */
    ChangeSkin(variant, skinUrl, accessToken) {
        let url = this.apiServices + `/minecraft/profile/skins`
        let payload = {
            "variant": variant,
            "url": skinUrl
        }
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "POST",
            "mode": "cors",
            "body": JSON.stringify(payload)
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} accessToken 
     * @param {string} uuid 
     * @returns {Promise<any>}
     */
    ResetSkin(accessToken, uuid) {
        let url = this.api + `user/profile${uuid}/skin`
        return fetch(url, {
            "headers": {          
                "accept-language": "en-US, en;q=0.9",
                "Authorization": `Bearer ${accessToken}`
            },
            "method": "DELETE",
            "mode": "cors",
        }).then(res => res.json()).then((data) => {return data}).catch((err) => {throw new Error(err)});
    }
}

module.exports = {
    MinecraftAPI: MinecraftAPI
}