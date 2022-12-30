export type Team = {
  id: string;
  create_at: number;
  update_at: number;
  delete_at: number;
  display_name: string;
  name: string;
  description: string;
  email: string;
  type: string;
  allowed_domains: string;
  invite_id: string;
  allow_open_invite: true;
  policy_id: string;
};
