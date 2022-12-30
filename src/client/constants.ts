export enum MattermostVersion {
  V4 = 'v4',
}

export const DEFAULT_MATTERMOST_VERSION = MattermostVersion.V4;

export const MATTERMOST_ENDPOINTS = (apiVersion: MattermostVersion) => ({
  LOGIN: `/api/${apiVersion}/users/login`,
  LOGOUT: `/api/${apiVersion}/users/logout`,
});
