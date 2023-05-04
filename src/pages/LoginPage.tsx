import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Auth from "../components/Auth/Auth";
import { handleErrorMessages } from "../utils/helpers";

interface Props {
	isRegister?: boolean;
}
const Login: React.FC<Props> = ({ isRegister = false }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [regEmail, setRegEmail] = useState("");
	const [regPassword, setRegPassword] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const { signIn, signUp } = useContext(AuthContext);

	const handleLoginWithEmail = async (e: React.FormEvent) => {
		setError("");
		e.preventDefault();
		try {
			await signIn(email, password);
		} catch (error: any) {
			setError(handleErrorMessages(error));
		}
	};

	const handleSignUpWithEmail = async (e: React.FormEvent) => {
		setError("");
		e.preventDefault();
		try {
			await signUp(regEmail, regPassword);
			setOpenModal(true);
		} catch (error: any) {
			console.log(error);
			setError(handleErrorMessages(error));
		}
	};

	if (isRegister) {
		return (
			<Auth
				email={regEmail}
				password={regPassword}
				setEmail={setRegEmail}
				setPassword={setRegPassword}
				onSubmit={handleSignUpWithEmail}
				isRegister
				isModalOpen={openModal}
				setModalOpen={setOpenModal}
				errorMessage={error}
			/>
		);
	} else {
		return (
			<Auth
				email={email}
				password={password}
				setEmail={setEmail}
				setPassword={setPassword}
				onSubmit={handleLoginWithEmail}
				errorMessage={error}
			/>
		);
	}
};

export default Login;
