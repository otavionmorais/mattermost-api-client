export enum MattermostVersion {
  V4 = 'v4',
}

export const DEFAULT_MATTERMOST_VERSION = MattermostVersion.V4;

export const MATTERMOST_ENDPOINTS = {
  LOGIN: (apiVersion: MattermostVersion = DEFAULT_MATTERMOST_VERSION) =>
    `/api/${apiVersion}/users/login`,
  LOGOUT: (apiVersion: MattermostVersion = DEFAULT_MATTERMOST_VERSION) =>
    `/api/${apiVersion}/users/logout`,

  LIST_USER_TEAMS: (apiVersion: MattermostVersion, userId: string) =>
    `/api/${apiVersion}/users/${userId}/teams`,

  LIST_CHANNELS_BY_USER_AND_TEAM: (
    apiVersion: MattermostVersion,
    userId: string,
    teamId: string,
  ) => `/api/${apiVersion}/users/${userId}/teams/${teamId}/channels`,

  LIST_THREADS: (
    apiVersion: MattermostVersion,
    userId: string,
    teamId: string,
  ) => `/api/${apiVersion}/users/${userId}/teams/${teamId}/threads`,
};
