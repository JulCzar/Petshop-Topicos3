import { Dispatch, ReactNode, SetStateAction } from 'react';
import { LoginResponse } from 'src/services';

export interface User {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
}

export interface LayoutProps {
  setGlobal: Dispatch<SetStateAction<LoginResponse | null>>;
  setTitle: Dispatch<SetStateAction<string>>;
  title: string;
  global: LoginResponse | null;
}
