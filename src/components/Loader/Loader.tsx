import React from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				color: "#f7d488",
			}}
		>
			<CircularProgress color='inherit' size={60} sx={{ mb: "15px" }} />
			<Typography
				sx={{
					fontSize: "24px",
					color: "#f7d488",
					fontWeight: 700,
				}}
			>
				Loading...
			</Typography>
		</Box>
	);
};

export default Loader;
