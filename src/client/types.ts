export type User = {
  id: string;
  create_at: number;
  update_at: number;
  delete_at: number;
  username: string;
  auth_data: string;
  auth_service: string;
  email: string;
  email_verified: boolean;
  nickname: string;
  first_name: string;
  last_name: string;
  position: string;
  roles: string;
  allow_marketing: boolean;
  props: {
    customStatus?: string;
  };
  notify_props: {
    channel: string;
    comments: string;
    desktop: string;
    desktop_sound: string;
    desktop_threads: string;
    email: string;
    email_threads: string;
    first_name: string;
    mention_keys: string;
    push: string;
    push_status: string;
    push_threads: string;
  };
  last_password_update: number;
  last_picture_update: number;
  locale: string;
  timezone: {
    automaticTimezone: string;
    manualTimezone: string;
    useAutomaticTimezone: string;
  };
  disable_welcome_email: boolean;
};

export interface IMattermostClientParams {
  login_id: string;
  password: string;
  baseUrl: string;
}

export interface IMattermostError {
  id: string;
  message: string;
  detailed_error: string;
  request_id: string;
  status_code: number;
}
