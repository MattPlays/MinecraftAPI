export interface RefreshResponse {
    accessToken: string,
    clientToken: string,
    selectedProfile: {id: string, name: string},
    user: {id: string, properties: {name: string, value: string}[]}
}