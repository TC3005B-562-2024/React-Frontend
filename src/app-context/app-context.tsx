import { User, UserCredential, getIdToken, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AppContextProps, AppState, Tokens } from "./types";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import httpInstance from "../services/httpInstance";

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingContext, setLoadingContext] = useState<boolean>(true);
  const [accountType, setAccountType] = useState<string>("");
  const [tokens, setTokens] = useState<Tokens | undefined>(undefined);

  const setTokensState = (accessToken: string, refreshToken: string) => {
    setTokens({ access_token: accessToken, refresh_token: refreshToken });
  };

  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingContext(false);
      if (currentUser) {
        httpInstance.interceptors.request.use(
          async (config) => {
            const newConfig = { ...config };
            const token = await getIdToken(currentUser);
            newConfig.headers.Authorization = `Bearer ${token}`;
            return newConfig;
          },
          (error) => {
            return Promise.reject(error);
          }
        )
      }
    });
  }
  , []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        accountType,
        setAccountType,
        tokens,
        setTokens: setTokensState,
        logOut: logOut,
        login: login,
        loadingContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
