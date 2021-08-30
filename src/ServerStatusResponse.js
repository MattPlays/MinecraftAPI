class ServerStatusResponse {
    /**
     * 
     * @param {{"minecraft.net": "green" | "yellow" | "red", "session.minecraft.net": "green" | "yellow" | "red", "account.mojang.com": "green" | "yellow" | "red", "authserver.mojang.com": "green" | "yellow" | "red", "api.mojang.com": "green" | "yellow" | "red", "textures.minecraft.net": "green" | "yellow" | "red", "mojang.com": "green" | "yellow" | "red"}} data 
     */
    constructor(data) {
        this["minecraft.net"] = data["minecraft.net"];
        this["session.minecraft.net"] = data["session.minecraft.net"];
        this["account.mojang.com"] = data["account.mojang.com"];
        this["authserver.mojang.com"] = data["authserver.mojang.com"];
        this["api.mojang.com"] = data["api.mojang.com"];
        this["textures.minecraft.net"] = data["textures.minecraft.net"];
        this["mojang.com"] = data["mojang.com"];
    };
};
module.exports = ServerStatusResponse;