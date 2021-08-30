import { AuthenticationResponse } from "./AuthenticationResponse"
import { ProfileInfoResponse } from "./ProfileInfoResponse"
import { ProfileNameChangeInfoResponse } from "./ProfileNameChangeInfoResponse"
import { RefreshResponse } from "./RefreshResponse"
import { ServerStatusResponse } from "./ServerStatusResponse"
import { UUIDReponse } from "./UUIDResponse"
interface ChangeNameError {
    path: string,
    errorType: string,
    error: string,
    details: {
        status: string
    },
    errorMessage: string,
    developerMessage: string;
}
export class MinecraftAPI {
    constructor();
    GetAPIStatus(): Promise<ServerStatusResponse>;
    Authenticate(username: string, password: string): Promise<AuthenticationResponse>;
    Refresh(accessToken: string, clientToken: string, profileIdentifier: string, playerName: string): Promise<RefreshResponse>;
    Validate(accessToken: string, clientToken: string): Promise<any>;
    Signout(username: string, password: string): Promise<any>;
    Invalidate(accessToken: string, clientToken: string): Promise<any>;
    UsernameToUUID(username: string): Promise<UUIDReponse>;
    UsernamesToUUIDs(usernames: string[]): Promise<UUIDReponse[]>;
    UUIDToNameHistory(uuid: string): Promise<{name: string, changedToAt: number}[]>;
    UUIDToSkin(uuid: string): Promise<{id: string, name: string, properties: {name: string, value: string, signature: string}[], legacy: boolean}>;
    GetBlockedServers(): Promise<string[]>;
    GetStatistics(metricKeys: "item_sold_minecraft" | "prepaid_card_redeemed_minecraft"): Promise<{total: number, last24h: number, saleVelocityPerSeconds: number}>;
    GetProfileInfo(accessToken: string): Promise<ProfileInfoResponse>;
    GetProfileNameChangeInfo(accessToken: string): Promise<ProfileNameChangeInfoResponse>;
    CheckNameAvailability(name: string, accessToken: string): Promise<{status: "DUPLICATE" | "AVAILABLE"}>;
    ChangeName(newName: string, accessToken: string): Promise<ProfileInfoResponse | ChangeNameError>;
    ChangeSkin(variant: "classic" | "slim", url: string, accessToken: string): Promise<any>;
    ResetSkin(accessToken: string, uuid: string): Promise<any>;
}