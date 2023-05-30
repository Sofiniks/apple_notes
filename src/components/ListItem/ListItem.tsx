import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import moment from "moment";
import { Note } from "../../types";

interface Props {
	note: Note;
	activeNote?: Note | null;
	onClick: () => void;
}

const ListItem: React.FC<Props> = ({ note, onClick, activeNote }) => {
	const currentNote = note === activeNote;
	return (
		<Box
			sx={{
				mb: "15px",
				cursor: "pointer",
				backgroundColor: currentNote ? "#f7d488" : "undefined",
				transition: "all .3s",
				"&:hover": {
					backgroundColor: "#f7d488",
				},
			}}
			onClick={onClick}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: "5px",
				}}
			>
				<Typography sx={{ fontWeight: 700 }}>{note.title}</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: "5px",
				}}
			>
				<Typography sx={{ color: "grey", fontSize: "12px" }}>
					{moment(note.updated_at).format("LL")}
				</Typography>
			</Box>
			<Box sx={{ padding: "10px 0" }}>
				<Typography>{note.content}</Typography>
			</Box>
			<Divider sx={{ backgroundColor: "#eee" }} />
		</Box>
	);
};

export default ListItem;
