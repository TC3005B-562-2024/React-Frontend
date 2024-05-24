import React from "react";
import { User, UserCredential } from "firebase/auth";

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export type AppState = {
  user: User | null;
  setUser: (user: User) => void;
  accountType: string;
  setAccountType: (accountType: string) => void;
  tokens: Tokens | undefined;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logOut: () => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  loadingContext: boolean;
};

export type AppContextProps = {
  children: React.ReactNode;
};
