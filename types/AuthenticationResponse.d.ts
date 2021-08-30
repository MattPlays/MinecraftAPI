interface AuthenticationProperty {
    name: string,
    value: string
}
interface AuthenticationProfile  {
    name: string,
    id: string
}
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