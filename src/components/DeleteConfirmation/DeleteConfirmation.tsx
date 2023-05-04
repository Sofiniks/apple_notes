import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
	onConfirm: () => void;
	onCancel: () => void;
}

const DeleteConfirmation: React.FC<Props> = ({ onConfirm, onCancel }) => {
	return (
		<Box
			sx={{
				width: "500px",
				height: "200px",
				backgroundColor: "#fff",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				border: "1px solid grey",
				borderRadius: "5px",
			}}
		>
			<Typography variant='h6' sx={{ marginBottom: "10px" }}>
				Are you sure you want to delete this note?
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button
					variant='contained'
					sx={{ marginRight: "10px", backgroundColor: "#f7d488" }}
					onClick={onConfirm}
				>
					Yes
				</Button>
				<Button
					variant='outlined'
					sx={{ borderColor: "#f7d488", color: "#f7d488" }}
					onClick={onCancel}
				>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default DeleteConfirmation;
