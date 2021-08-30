# MinecraftAPI
This package is a wrapper for the official Minecraft API

1. [Minecraft](#minecraft)
    1. [Usage](#minecraft-usage)
    2. [Functions](#minecraft-functions)
        1. [GetAPIStatus](#minecraft-getapistatus)
            1. [Output](#minecraft-getapistatus-output)
            2. [Usage](#minecraft-getapistatus-usage)
        2. [Authenticate](#minecraft-authenticate)
            1. [Inputs](#minecraft-authenticate-inputs)
            2. [Output](#minecraft-authenticate-output)
            3. [Usage](#minecraft-authenticate-usage)
        3. [Refresh](#minecraft-refresh)
            1. [Inputs](#minecraft-refresh-inputs)
            2. [Output](#minecraft-refresh-output)
            3. [Usage](#minecraft-refresh-usage)
        4. [Validate](#minecraft-validate)
            1. [Inputs](#minecraft-validate-inputs)
            2. [Output](#minecraft-validate-output)
            3. [Usage](#minecraft-validate-usage)
        5. [Signout](#minecraft-signout)
            1. [Inputs](#minecraft-signout-inputs)
            2. [Output](#minecraft-signout-output)
            3. [Usage](#minecraft-signout-usage)
        6. [Invalidate](#minecraft-invalidate)
            1. [Inputs](#minecraft-invalidate-inputs)
            2. [Output](#minecraft-invalidate-output)
            3. [Usage](#minecraft-invalidate-usage)
        7. [UsernametoUUID](#minecraft-usernametouuid)
            1. [Input](#minecraft-usernametouuid-input)
            2. [Output](#minecraft-usernametouuid-output)
            3. [Usage](#minecraft-usernametouuid-usage)
        8. [UsernamesToUUIDs](#minecraft-usernamestouuids)
            1. [Input](#minecraft-usernamestouuids-input)
            2. [Output](#minecraft-usernamestouuids-output)
            3. [Usage](#minecraft-usernamestouuids-usage)
        9. [UUIDToNameHistory](#minecraft-uuidtonamehistory)
            1. [Input](#minecraft-uuidtonamehistory-input)
            2. [Output](#minecraft-uuidtonamehistory-output)
            3. [Usage](#minecraft-uuidtonamehistory-usage)
        10. [UUIDToSkin](#minecraft-uuidtoskin)
            1. [Input](#minecraft-uuidtoskin-input)
            2. [Output](#minecraft-uuidtoskin-output)
            3. [Usage](#minecraft-uuidtoskin-usage)
        11. [GetBlockedServers](#minecraft-getblockedservers)
            1. [Output](#minecraft-getblockedservers-output)
            2. [Usage](#minecraft-getblockedservers-usage)
        12. [GetStatistics](#minecraft-getstatistics)
            1. [Output](#minecraft-getstatistics-output)
            2. [Usage](#minecraft-getstatistics-usage)
        13. [GetPlayerInfo](#minecraft-getplayerinfo)
            1. [Input](#minecraft-getplayerinfo-input)
            2. [Output](#minecraft-getplayerinfo-output)
            3. [Usage](#minecraft-getplayerinfo-usage)
        14. [GetPlayerNameChangeInfo](#minecraft-getplayernamechangeinfo)
            1. [Input](#minecraft-getplayernamechangeinfo-input)
            2. [Output](#minecraft-getplayernamechangeinfo-output)
            3. [Usage](#minecraft-getplayernamechangeinfo-usage)
        15. [CheckNameAvailability](#minecraft-checknameavailability)
            1. [Inputs](#minecraft-checknameavailability-inputs)
            2. [Output](#minecraft-checknameavailability-output)
            3. [Usage](#minecraft-checknameavailability-usage)
        16. [ChangeName](#minecraft-changename)
            1. [Inputs](#minecraft-changename-inputs)
            2. [Output](#minecraft-changename-output)
            3. [Usage](#minecraft-changename-usage)
        17. [ChangeSkin](#minecraft-changeskin)
            1. [Inputs](#minecraft-changeskin-inputs)
            2. [Output](#minecraft-changeskin-output)
            3. [Usage](#minecraft-changeskin-usage)
        18. [ResetSkin](#minecraft-resetskin)
            1. [Inputs](#minecraft-resetskin-inputs)
            2. [Output](#minecraft-resetskin-output)
            3. [Usage](#minecraft-resetskin-usage)
    3. [Return Types](#minecraft-returntypes)
        1. [ServerStatusResponse](#minecraft-returntypes-serverstatusresponse)
        2. [AuthenticationResponse](#minecraft-returntypes-authenticationresponse)
            1. [AuthenticationProperty](#minecraft-returntypes-authenticationresponse-authenticationproperty)
            2. [AuthenticationProfile](#minecraft-returntypes-authenticationresponse-authenticationprofile)
        3. [RefreshResponse](#minecraft-returntypes-refreshresponse)
        4. [UUIDResponse](#minecraft-returntypes-uuidresponse)
        5. [ProfileInfoResponse](#minecraft-returntypes-profileinforesponse)
        6. [ProfileNameChangeInfoResponse](#minecraft-returntypes-profilenamechangeinforesponse)


## Minecraft <a id="minecraft">
**This is an Offical API** [Offical Docs](https://wiki.vg/Mojang_API)
### Usage <a id="minecraft-usage">
```javascript
const {MinecraftAPI} = require("@mattplays/minecraft-api")
const API = new MinecraftAPI();
```
### Functions <a id="minecraft-functions">
#### GetAPIStatus <a id="minecraft-getapistatus">
Returns status of various Mojang services. Possible values are green (no issues), yellow (some issues), red (service unavailable).
##### Output <a id="minecraft-getapistatus-output">
The GetAPIStatus function returns a `Promise<ServerStatusResponse>` type
##### Usage <a id="minecraft-getapistatus-usage">
```javascript
const API = new MinecraftAPI();
API.GetAPIStatus().then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});;
```
#### Authenticate <a id="minecraft-authenticate">
Authenticates a user using their password.
##### Inputs <a id="minecraft-authenticate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
| password | `string` | Yes | The user's password |
##### Output <a id="minecraft-authenticate-output">
The Authenticate function returns a `Promise<AuthenticationResponse>` type
##### Usage <a id="minecraft-authenticate-usage">
```javascript
const API = new MinecraftAPI();
API.Authenticate("Notch", "MINECRAFTROCKS").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});;
```
#### Refresh <a id="minecraft-refresh">
Refreshes a valid accessToken. It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file see [lastlogin](https://wiki.vg/Lastlogin).
##### Inputs <a id="minecraft-refresh-inputs">

| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | Yes | The clientToken that was used to obtain accessToken in the first place |
| profileIdentifier | `string` | Yes | a hexidecimal profile identifier |
| playerName | `string` | Yes | The user's username |
##### Output <a id="minecraft-refresh-output">
The Refresh function returns a `Promise<RefreshResponse>` type
##### Usage <a id="minecraft-refresh-usage">
```javascript
const API = new MinecraftAPI();
API.Refresh("DUMMY_ACCESS-TOKEN", "DUMMY_CLIENT-TOKEN", "DUMMY_PROFILEIDENTIFIER", "DUMMY_PLAYERNAME").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### Validate <a id="minecraft-validate">
Checks if an accessToken is usable for authentication with a Minecraft server. The Minecraft Launcher (as of version 1.6.13) calls this endpoint on startup to verify that its saved token is still usable, and calls /refresh if this returns an error.

Note that an accessToken may be unusable for authentication with a Minecraft server, but still be good enough for /refresh. This mainly happens when one has used another client (e.g. played Minecraft on another PC with the same account). It seems only the most recently obtained accessToken for a given account can reliably be used for authentication (the next-to-last token also seems to remain valid, but don't rely on it).

/validate may be called with or without a clientToken. If a clientToken is provided, it should match the one used to obtain the accessToken. The Minecraft Launcher does send a clientToken to /validate.
##### Inputs <a id="minecraft-validate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | No | The clientToken that was used to obtain accessToken in the first place |
##### Output <a id="minecraft-validate-output">
The Validate functions returns an empty payload (`Promise<any>`)
##### Usage <a id="minecraft-validate-usage">
```javascript
const API = new MinecraftAPI();
API.Validate("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### Signout <a id="minecaft-signout">
Invalidates accessTokens using an account's username and password.
##### Inputs <a id="minecraft-signout-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
| password | `string` | Yes | The user's password |
##### Output <a id="minecraft-signout-output">
The Signout function returns an empty payload if successful (`Promise<any>`)
##### Usage <a id="minecraft-signout-usage">
```javascript
const API = new MinecraftAPI();
API.Signout("Notch", "Minecraft-ROCKS").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### Invalidate <a id="minecraft-invalidate">
Invalidates accessTokens using a client/access token pair.
##### Inputs <a id="minecraft-invalidate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | Yes | The clientToken that was used to obtain accessToken in the first place |
##### Output <a id="minecraft-invalidate-output">
The Invalidate function returns an empty payload if successful (`Promise<any>`)
##### Usage <a id="minecraft-invalidate-usage">
```javascript
const API = new MinecraftAPI();
API.Invalidate("DUMMMY_ACCESS-TOKEN", "DUMMY_CLIENT-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### UsernameToUUID <a id="minecraft-usernametouuid">
This will return the UUID of the username.
##### Input <a id="minecraft-usernametouuid-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
##### Output <a id="minecraft-usernametouuid-output">
The UsernameToUUID function returns a `Promise<UUIDResponse>` type
##### Usage <a id="minecraft-usernametouuid-usage">
```javascript
const API = new MinecraftAPI();
API.UsernameToUUID("Notch").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### UsernamesToUUIDs <a id="minecraft-usernamestouuids">
This will return player UUIDs and some extras.
##### Input <a id="minecraft-usernamestouuids-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| usernames  | `string[]`  | Yes | List of Usernames |
##### Output <a id="minecraft-usernamestouuids-output">
The UsernameToUUID function returns a `Promise<UUIDResponse>` type
##### Usage <a id="minecraft-usernamestouuids-usage">
```javascript
const API = new MinecraftAPI();
API.UsernamesToUUIDs(["Notch", "jeb_"]).then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### UUIDToNameHistory <a id="minecraft-uuidtonamehistory">
Returns all the usernames this user has used in the past and the one they are using currently. The UUID must be given either without, or correctly formatted hyphens.
##### Input <a id="minecraft-uuidtonamehistory-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid  | `string`  | Yes | The user's UUID |
##### Output <a id="minecraft-uuidtonamehistory-output">
The UUIDToNameHistory function returns
```javascript
Promise<{name: string, changedToAt: number}[]>
```
##### Usage <a id="minecraft-uuidtonamehistory-usage">
```javascript
const API = new MinecraftAPI();
API.UUIDToNameHistory("069a79f444e94726a5befca90e38aaf5").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### UUIDToSkin <a id="minecraft-uuidtoskin">
This will return the player's username plus any additional information about them (e.g. skins). [Example](https://sessionserver.mojang.com/session/minecraft/profile/4566e69fc90748ee8d71d7ba5aa00d20) **This has no ratelimit**.
##### Inputs <a id="minecraft-uuidtoskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid  | `string`  | Yes | The user's UUID | 
##### Output <a id="minecraft-uuidtoskin-output">
The UUIDToSkin function returns
```javascript
Promise<{id: string, name: string, properties: {name: string, value: string, signature: string}[], legacy: boolean}>
```
##### Usage <a id="minecraft-uuidtoskin-usage">
```javascript
const API = new MinecraftAPI();
API.UUIDToSkin("4566e69fc90748ee8d71d7ba5aa00d20").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### GetBlockedServers <a id="minecraft-getblockedservers">
Returns a list of SHA1 hashes used to check server addresses against when the client tries to connect.

Clients check the lowercase name, using the ISO-8859-1 charset, against this list. They will also attempt to check subdomains, replacing each level with a \*. Specifically, it splits based off of the . in the domain, goes through each section removing one at a time. For instance, for mc.example.com, it would try mc.example.com, \*.example.com, and \*.com. With IP addresses (verified by having 4 split sections, with each section being a valid integer between 0 and 255, inclusive) substitution starts from the end, so for 192.168.0.1, it would try 192.168.0.1, 192.168.0.\*, 192.168.\*, and 192.\*.

This check is done by the bootstrap class in netty. The default netty class is overridden by one in the com.mojang:netty dependency loaded by the launcher. This allows it to affect any version that used netty (1.7+)
##### Output <a id="minecraft-getblockedservers-output">
The GetBlockedServers function returns a `Promise<string[]>` type
##### Usage <a id="minecraft-getblockedservers-usage">
```javascript
const API = new MinecraftAPI();
API.GetBlockedServers().then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### GetStatistics <a id="minecraft-getstatistics">
Get statistics on the sales of Minecraft.
##### Input <a id="minecraft-getstatistics-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| metricKeys  | `["item_sold_minecraft", "prepaid_card_redeemed_minecraft"]`  | Yes | The Statistics you want |
##### Output <a id="minecraft-getstatistics-output">
The GetStatistics function returns a
```javascript
Promise<{
    total: number, 
    last24h: number, 
    saleVelocityPerSeconds: number,
}>
```
##### Usage <a id="minecraft-getstatistics-usage">
```javascript
const API = new MinecraftAPI();
API.GetStatistics(["item_sold_minecraft"]).then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### GetProfileInfo <a id="minecraft-getprofileinfo">
This API endpoint fetches information about the current account including UUID, username, skins, and capes.
##### Input <a id="minecraft-getprofileinfo-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-getprofileinfo-output">
The GetProfileInfo function returns a `Promise<ProfileInfoResponse>` type
##### Usage <a id="minecraft-getprofileinfo-usage">
```javascript
const API = new MinecraftAPI();
API.GetProfileInfo("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### GetProfileNameChangeInfo <a id="minecraft-getprofilenamechangeinfo">
This API endpoint fetches information about the profile name such as the date the name was changed and the date the account was created.
##### Input <a id="minecraft-getprofilenamechangeinfo-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-getprofilenamechangeinfo-output">
The GetProfileNameChangeInfo function returns a `Promise<ProfileNameChangeInfoResponse>` type
##### Usage <a id="minecraft-getprofilenamechangeinfo-usage">
```javascript
const API = new MinecraftAPI();
API.GetProfileNameChangeInfo("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### CheckNameAvailability <a id="minecraft-checknameavailability">
This API endpoints check if the given name is available.
##### Inputs <a id="minecraft-checknameavailability-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| name | `string` | Yes | The username you want to check availability of |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-checknameavailability-output">
The CheckNameAvailability function returns a
```javascript
Promise<{
    status: "DUPLICATE" | "AVAILABLE"
}>
```
##### Usage <a id="minecraft-checknameavailability-usage">
```javascript
const API = new MinecraftAPI();
API.CheckNameAvailability("Notch", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### ChangeName <a id="minecraft-changename">
This will set the name for the account that the access token in the Authorization header belongs to.
##### Inputs <a id="minecraft-changename-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| newName | `string` | Yes | The username you want |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-changename-output">
The ChangeName function returns a `Promise<ProfileInfoResponse>` type if successful or `Promise<ChangeNameError>` type if not.
##### Usage <a id="minecraft-changename-usage">
```javascript
const API = new MinecraftAPI();
API.ChangeName("Notch", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### ChangeSkin <a id="minecraft-changeskin">
This will set the skin for the selected profile, but Mojang's servers will fetch the skin from a URL.
##### Inputs <a id="minecraft-changeskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| variant | `"classic" \| "slim"` | Yes | The skin type |
| url | `string` | Yes | The URL to the skin | 
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-changeskin-output">
Upon error, the server will send back a JSON with the error. (Success is a blank payload) `Promise<any>`
##### Usage <a id="minecraft-changeskin-usage">
```javascript
const API = new MinecraftAPI();
API.ChangeSkin("slim", "https://thereisaskinhere.com/minecraft/totallyarealskin.png", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
#### ResetSkin <a id="minecraft-resetskin">
Resets the user's skin to the default one.
##### Inputs <a id="minecraft-resetskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid | `string` | Yes | The Unique User Identifier of the User |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-resetskin-output">
No response unless an error occurred.
##### Usage <a id="minecraft-resetskin-usage">
```javascript
const API = new MinecraftAPI();
API.ResetSkin("DUMMY_ACCESS-TOKEN", "069a79f444e94726a5befca90e38aaf5").then(() => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
### Return Types <a id="minecraft-returntypes">
#### ServerStatusResponse <a id="minecraft-returntypes-serverstatusresponse">
```typescript
export interface ServerStatusResponse {
    "minecraft.net": "green" | "yellow" | "red",
    "session.minecraft.net": "green" | "yellow" | "red",
    "account.mojang.com": "green" | "yellow" | "red",
    "authserver.mojang.com": "green" | "yellow" | "red",
    "api.mojang.com": "green" | "yellow" | "red",
    "textures.minecraft.net": "green" | "yellow" | "red",
    "mojang.com": "green" | "yellow" | "red"
}
```
#### AuthenticationResponse <a id="minecraft-returntypes-authenticationresponse">
```typescript
export interface AuthenticationResponse {
    user: {
        username: string,
        properties: AuthenticationProperty[],
        id: string,
    },
    clientToken: string,
    accessToken: string,
    availableProfiles: AuthenticationProfile[],
    selectedProfile: AuthenticationProfile
}
```
##### AuthenticationProperty <a id="minecraft-returntypes-authenticationresponse-authenticationproperty">
```typescript
interface AuthenticationProperty {
    name: string,
    value: string
}
```
##### AuthenticationProfile <a id="minecraft-returntypes-authenticationresponse-authenticationprofile">
```typescript
interface AuthenticationProfile  {
    name: string,
    id: string
}
```
#### RefreshResponse <a id="minecraft-returntypes-refreshresponse">
```typescript
export interface RefreshResponse {
    accessToken: string,
    clientToken: string,
    selectedProfile: {id: string, name: string},
    user: {id: string, properties: {name: string, value: string}[]}
}
```
#### UUIDResponse <a id="minecraft-returntypes-uuidresponse">
```typescript
export interface UUIDReponse {
    name: string,
    id: string,
}
```
#### ProfileInfoResponse <a id="minecraft-returntypes-profileinforesponse">
```typescript
export interface ProfileInfoResponse {
    id: string,
    name: string,
    skins:  {id: string, state: string, url: string, variant: string}[],
    capes: [];
}
```
#### ProfileNameChangeInfoResponse <a id="minecraft-returntypes-profilenamechangeinforesponse">
```typescript
export interface ProfileNameChangeInfoResponse {
    changedAt: string,
    createdAt: string,
    nameChangeAllowed: boolean;
}
```