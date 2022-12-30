import { MattermostVersion, MATTERMOST_ENDPOINTS } from '../constants';
import MattermostClient from '../MattermostClient';
import { MattermostError } from '../utils';
import { Team } from './types';

export default class Teams {
  constructor(private readonly client: MattermostClient) {}

  public async getUserTeams(userId: string): Promise<Team[]> {
    try {
      const { data } = await this.client.get<Team[]>(
        MATTERMOST_ENDPOINTS.LIST_USER_TEAMS(MattermostVersion.V4, userId),
      );
      return data;
    } catch (error) {
      throw MattermostError(error);
    }
  }
}
