import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Grid from "@mui/material/Grid";
import useNotes from "../hooks/useNotes";
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/Sidebar/Sidebar";
import Workspace from "../components/Workspace/Workspace";
import Loader from "../components/Loader/Loader";

const MainPage: React.FC = () => {
	const { pathname } = useLocation();
	const { notes, loading, fetchNotes } = useNotes();
	const { user, userId } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			fetchNotes(userId);
		}
	}, []);

	if (!notes.length && pathname !== "/edit") {
		return (
			<Box
				sx={{
					display: "flex",
					minHeight: "100vh",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					component={"h2"}
					sx={{
						fontWeight: 700,
						fontSize: "24px",
						mb: "20px",
					}}
				>
					Welcome {user}!
				</Typography>
				<Button
					startIcon={<AddOutlinedIcon />}
					sx={{
						fontSize: "14px",
						color: "#f7d488",
						transition: ".3s",
						"&:hover": {
							transform: "scale(1.1)",
							transition: ".3s",
							backgroundColor: "transparent",
						},
					}}
					onClick={() => navigate("/edit")}
				>
					Add your first note
				</Button>
			</Box>
		);
	}
	if (loading) return <Loader />;
	return (
		<Box
			sx={{
				padding: "30px 0",
				display: "flex",
				minHeight: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container>
				<Grid container columnSpacing={6}>
					<Grid item lg={4} md={6} sm={6}>
						<Sidebar />
					</Grid>
					<Grid item lg={8} md={6} sm={6}>
						<Workspace />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default MainPage;
