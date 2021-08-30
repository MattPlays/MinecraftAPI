export interface ProfileInfoResponse {
    id: string,
    name: string,
    skins:  {id: string, state: string, url: string, variant: string}[],
    capes: [];
}