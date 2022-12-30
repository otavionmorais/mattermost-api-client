export type ThreadParticipantMetadataEmbed = {
  type: string;
  url: string;
  data: {};
};

export type ThreadParticipantMetadataEmoji = {
  id: string;
  creator_id: string;
  name: string;
  create_at: number;
  update_at: number;
  delete_at: number;
};

export type ThreadParticipantMetadataFile = {
  id: string;
  user_id: string;
  post_id: string;
  create_at: number;
  update_at: number;
  delete_at: number;
  name: string;
  extension: string;
  size: number;
  mime_type: string;
  width: number;
  height: number;
  has_preview_image: true;
};

export type ThreadParticipantMetadataReaction = {
  user_id: string;
  post_id: string;
  emoji_name: string;
  create_at: number;
};

export type ThreadParticipantMetadata = {
  embeds: ThreadParticipantMetadataEmbed[];
  emojis: ThreadParticipantMetadataEmoji[];
  files: ThreadParticipantMetadataFile[];
  images: {};
  reactions: ThreadParticipantMetadataReaction[];
};

export type ThreadParticipant = {
  id: string;
  create_at: number;
  update_at: number;
  delete_at: number;
  edit_at: number;
  user_id: string;
  channel_id: string;
  root_id: string;
  original_id: string;
  message: string;
  type: string;
  props: {};
  hashtag: string;
  file_ids: string[];
  pending_post_id: string;
  metadata: ThreadParticipantMetadata;
};

export type ThreadPost = {
  id: string;
  create_at: number;
  update_at: number;
  delete_at: number;
  edit_at: number;
  user_id: string;
  channel_id: string;
  root_id: string;
  original_id: string;
  message: string;
  type: string;
  props: {};
  hashtag: string;
  file_ids: string[];
  pending_post_id: string;
  metadata: ThreadParticipantMetadata;
};

export type Thread = {
  id: string;
  reply_count: number;
  last_reply_at: number;
  last_viewed_at: number;
  participants: ThreadParticipant[];
  post: ThreadPost;
};
