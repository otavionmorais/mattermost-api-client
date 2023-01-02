import { MattermostVersion, MATTERMOST_ENDPOINTS } from '../constants';
import MattermostClient from '../MattermostClient';
import { MattermostError } from '../utils';
import { Channel } from './types';

export default class Channels {
  constructor(private readonly client: MattermostClient) {}

  public async getChannelsByUserAndTeam(
    userId: string,
    teamId: string,
  ): Promise<Channel[]> {
    try {
      const { data } = await this.client.get<Channel[]>(
        MATTERMOST_ENDPOINTS.LIST_CHANNELS_BY_USER_AND_TEAM(
          MattermostVersion.V4,
          userId,
          teamId,
        ),
      );
      return data;
    } catch (error) {
      throw MattermostError(error);
    }
  }
}
