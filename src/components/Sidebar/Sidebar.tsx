import React, { useState, useEffect } from "react";
import { Box, Button, List, Typography, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../../hooks/useNotes";
import { Note } from "../../types";
import useAuth from "../../hooks/useAuth";
import ListItem from "../ListItem/ListItem";

const Sidebar: React.FC = () => {
	const { setActiveNote, notes, fetchNotes, getActiveNote } = useNotes();
	const { signOut, userId } = useAuth();
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		if (userId) {
			fetchNotes(userId);
		}
	}, []);

	const handleAddNote = () => {
		setActiveNote(null);
		navigate("/edit");
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};
	const handleNoteClick = (id: string) => {
		setActiveNote(id);
		navigate(`/${id}`);
	};
	const filteredNotes: Note[] = notes?.filter(
		(note) =>
			note?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			note?.content?.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const active = getActiveNote() || notes[0];

	return (
		<>
			<Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: "15px",
					}}
				>
					<Button sx={{ color: "#f7d488" }} onClick={signOut}>
						Sign out
					</Button>
					<Typography
						component='h1'
						sx={{ fontSize: "24px", color: "#f7d488", fontWeight: 700 }}
					>
						Notes
					</Typography>

					<Button
						startIcon={<AddOutlinedIcon />}
						sx={{
							fontSize: "14px",
							color: "#f7d488",
							fontWeight: 500,
						}}
						onClick={handleAddNote}
					>
						Add new
					</Button>
				</Box>
				<Box
					sx={{
						padding: "10px",
						border: "1px solid #eee",
						borderRadius: "7px",
						minHeight: "400px",
					}}
				>
					{!notes.length ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								minHeight: "400px",
							}}
						>
							Waiting for your first note!
						</Box>
					) : (
						<TextField
							placeholder='Search notes...'
							variant='outlined'
							fullWidth
							margin='normal'
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					)}

					<List>
						{filteredNotes?.map((note: Note) => (
							<ListItem
								key={note.id}
								note={note}
								activeNote={active}
								onClick={() => handleNoteClick(String(note.id))}
							/>
						))}
					</List>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
