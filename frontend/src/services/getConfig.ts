import { AxiosRequestConfig } from 'axios';
import { STORAGE_KEY } from 'src/styles/layout';
import { LoginResponse, persistentStorage } from '.';

export function getConfig(): AxiosRequestConfig {
  const data = persistentStorage.getItem<LoginResponse>(STORAGE_KEY);

  if (!data) return {};

  return {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  };
}
