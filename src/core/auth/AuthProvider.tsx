import { createContext, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../../index";
import { useNavigate } from "react-router-dom";

export type AuthenticationState = {
  status: "fetched" | "pending"
}
const AuthenticationContext = createContext<AuthenticationState>({ status: "pending" });

type AuthenticationProviderProps = { children: ReactNode };
export const AuthenticationProvider = (props: AuthenticationProviderProps) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthenticationState>({ status: "pending" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        
      } else {
        await auth.signOut();
        navigate('/signin');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthenticationContext.Provider value={authState}>
      {props.children}
    </AuthenticationContext.Provider>
  )
}
