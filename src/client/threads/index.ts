import { MattermostVersion, MATTERMOST_ENDPOINTS } from '../constants';
import MattermostClient from '../MattermostClient';
import { MattermostError } from '../utils';
import { Thread } from './types';

export default class Threads {
  constructor(private readonly client: MattermostClient) {}

  public async getThreads(userId: string, teamId: string): Promise<Thread[]> {
    try {
      const { data } = await this.client.get<Thread[]>(
        MATTERMOST_ENDPOINTS.LIST_THREADS(MattermostVersion.V4, userId, teamId),
      );
      return data;
    } catch (error) {
      throw MattermostError(error);
    }
  }
}
