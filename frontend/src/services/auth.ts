import { api } from 'src/http';
import { User } from 'src/styles/layout/types';

interface LoginDTO {
  email: string;
  password: string;
}

interface RegisterDTO extends LoginDTO {
  username: string;
}

export interface LoginResponse {
  user?: User;
  token: string;
  success: boolean;
  errors: boolean;
}

export const login = async (loginData: LoginDTO) => {
  try {
    const { data } = await api.post<LoginResponse>(
      '/AuthManagement/Login',
      loginData
    );

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const register = async (user: RegisterDTO) => {
  try {
    const { data } = await api.post('/AuthManagement/Register', user);

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
