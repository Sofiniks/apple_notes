import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { user, signIn, signInWithGoogle, signOut, signUp } = useContext(AuthContext);

  return {
    user,
    signInWithGoogle,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;