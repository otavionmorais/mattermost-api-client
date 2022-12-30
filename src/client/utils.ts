import { IMattermostError } from './types';

export function MattermostError(error: any) {
  if (error.isAxiosError) {
    const errorData: IMattermostError = error.response?.data;
    throw new Error(errorData?.message || 'Network error');
  }
  throw error;
}
