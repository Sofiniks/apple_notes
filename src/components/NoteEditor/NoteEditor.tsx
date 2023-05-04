import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useNotes from "../../hooks/useNotes";
import useAuth from "../../hooks/useAuth";
import { Note } from "../../types";

interface Props {
	setIsEditable: (arg: boolean) => void;
}

const NoteEditor: React.FC<Props> = ({ setIsEditable }) => {
	const { userId } = useAuth();
	const { editNote, getActiveNote, fetchNotes, addNote, activeNote, notes } =
		useNotes();
	const [currentNote, setCurrentNote] = useState<Note>({
		id: "",
		title: "",
		content: "",
		updated_at: "",
		userId: "",
	});

	useEffect(() => {
		if (userId) {
			fetchNotes(userId);
		}
	}, []);

	useEffect(() => {
		const active = getActiveNote();
    const currentActiveNote = active || notes[0];
		if (currentActiveNote) {
			setCurrentNote({
				id: currentActiveNote.id,
				title: currentActiveNote.title,
				content: currentActiveNote.content,
				updated_at: currentActiveNote.updated_at,
				userId: currentActiveNote.userId,
			});
		}
	}, [activeNote, getActiveNote]);

	const handleChange = (field: string, text: string) => {
		setCurrentNote((prevNote: Note) => ({
			...prevNote,
			id: prevNote?.id || uuid(),
			userId: String(userId),
			[field]: text,
			updated_at: new Date().toISOString(),
		}));
	};

	const handleSave = async () => {
		if (activeNote) {
			editNote(currentNote);
		} else {
			addNote(currentNote);
		}
		setIsEditable(false);
		setCurrentNote({
			id: "",
			title: "",
			content: "",
			updated_at: "",
			userId: "",
		});
		fetchNotes(String(userId));
	};
	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
			<Box
				onClick={handleSave}
				sx={{
					fontSize: "14px",
					color: "#f7d488",
					fontWeight: 500,
					textTransform: "uppercase",
					mb: "15px",
					padding: "6px",
				}}
			>
				Save
			</Box>
			<Box
				sx={{
					padding: "10px",
					border: "1px solid #eee",
					borderRadius: "7px",
					height: "100%",
				}}
			>
				<TextField
					value={currentNote.title}
					placeholder={!currentNote.title ? "Notes title..." : ""}
					onChange={(e) => handleChange("title", e.target.value)}
					sx={{
						"& fieldset": { border: "none", borderBottom: "1px solid #eee" },
					}}
					fullWidth
				/>
				<TextField
					value={currentNote.content}
					placeholder={!currentNote.content ? "Notes content..." : ""}
					multiline
					fullWidth
					onChange={(e) => handleChange("content", e.target.value)}
					sx={{ alignSelf: "stretch", "& fieldset": { border: "none" } }}
				/>
			</Box>
		</Box>
	);
};

export default NoteEditor;
