import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	isModalOpen: boolean;
	handleCloseModal: () => void;
}

const SignUpConfirmation: React.FC<Props> = ({ isModalOpen, handleCloseModal }) => {
    const navigate = useNavigate();
	return (
		<Modal
			open={isModalOpen}
			onClose={handleCloseModal}
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: "400px",
					height: "200px",
					backgroundColor: "#fff",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					border: "1px solid grey",
				}}
			>
				<Typography
					component={"h2"}
					sx={{
						fontWeight: "700",
					}}
				>
					Sign up successful!
				</Typography>
				<Button onClick={() => navigate("/login")}>Proceed to login</Button>
			</Box>
		</Modal>
	);
};

export default SignUpConfirmation;
