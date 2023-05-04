import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box, Typography, Button, Modal } from "@mui/material";
import { Delete } from "@mui/icons-material";
import useNotes from "../../hooks/useNotes";
import useAuth from "../../hooks/useAuth";
import { Note } from "../../types";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";


interface Props {
	setIsEditable: (arg: boolean) => void;
}
const NoteViewer: React.FC<Props> = ({ setIsEditable }) => {
	const { id } = useParams();
	const { notes, getActiveNote, fetchNotes, deleteNote } = useNotes();
	const { userId } = useAuth();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleDeleteNote = () => {
		setOpenDeleteModal(true);
	};

	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};

	const handleDeleteConfirmed = () => {
		deleteNote(note.id);
		handleCloseDeleteModal();
	};

	useEffect(() => {
		if (userId) {
			fetchNotes(userId);
		}
	}, []);

	const activeNote = getActiveNote();
	const note: Note =
		notes?.find((note) => note.id === id) || activeNote || notes[0];

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "6px",
					mb: "10px",
				}}
			>
				<Button
					onClick={() => setIsEditable(true)}
					sx={{
						fontSize: "14px",
						color: "#f7d488",
						fontWeight: 500,
						textTransform: "uppercase",
					}}
				>
					Edit
				</Button>

				<Button
					startIcon={<Delete />}
					onClick={handleDeleteNote}
					sx={{
						fontSize: "14px",
						color: "#f7d488",
						fontWeight: 500,
						textTransform: "uppercase",
					}}
				>
					Delete
				</Button>
			</Box>
			<Box
				sx={{
					padding: " 25px 15px",
					border: "1px solid #eee",
					borderRadius: "7px",
					height: "100%",
				}}
			>
				<Typography>{note?.title}</Typography>
				<ReactMarkdown>{String(note?.content)}</ReactMarkdown>
			</Box>
			<Modal
				open={openDeleteModal}
				onClose={handleCloseDeleteModal}
				aria-labelledby='modal-title'
				aria-describedby='modal-description'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<DeleteConfirmation
					onConfirm={handleDeleteConfirmed}
					onCancel={handleCloseDeleteModal}
				/>
			</Modal>
		</Box>
	);
};

export default NoteViewer;
