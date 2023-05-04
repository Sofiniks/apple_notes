import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
	const { user, signIn, signOut, signUp, userId } = useContext(AuthContext);

	return {
		user,
		userId,
		signUp,
		signIn,
		signOut,
	};
};

export default useAuth;
