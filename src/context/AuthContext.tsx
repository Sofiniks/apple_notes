import { createContext, useEffect, useState, ReactNode } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
	user: string | null;
	userId: string | null;
	signUp: (email: string, password: string) => Promise<void>;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	userId: null,
	signUp: (email: string, password: string) => {
		console.log(email, password);
		return Promise.resolve();
	},
	signIn: (email: string, password: string) => {
		console.log(email, password);
		return Promise.resolve();
	},
	signOut: () => Promise.resolve(),
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState(() => localStorage.getItem("user"));
	const [userId, setUserId] = useState(() => localStorage.getItem("userId"));
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, () => {
			setUser(() => localStorage.getItem("user"));
		});
		return unsubscribe;
	}, []);

	const signUp = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = async (email: string, password: string) => {
		const res = await signInWithEmailAndPassword(auth, email, password);
		setUser(email);
		setUserId(res.user.uid);
		localStorage.setItem("user", email);
		localStorage.setItem("userId", res.user.uid);

		if (res.user) {
			navigate("/");
		}
	};

	const signOut = async () => {
		await getAuth().signOut();
		setUser(null);
		setUserId(null);
		localStorage.removeItem("user");
		localStorage.removeItem("userId");
	};

	const contextValue: AuthContextType = {
		user,
		userId,
		signUp,
		signIn,
		signOut,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
