import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any | null;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signInWithGoogle: () => Promise.resolve(),
  signUp: (email: string, password: string) => Promise.resolve(),
  signIn: (email: string, password: string) => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const  navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email: string, password: string) => {
   const res =  await signInWithEmailAndPassword(auth, email, password);
   setUser(res.user);
   if(res.user) {
    navigate('/notes');
   }
   
  };

  const signOut = async () => {
    await getAuth().signOut();
  };

  const contextValue: AuthContextType = {
    user,
    signInWithGoogle,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};




