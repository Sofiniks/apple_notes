import React, { createContext, useState, useEffect } from "react";
import {
	collection,
	addDoc,
	deleteDoc,
	doc,
	updateDoc,
	where,
	onSnapshot,
	query,
} from "@firebase/firestore";
import { db } from "../utils/firebase";
import { Note, NotesContextType } from "../types";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const NotesContext = createContext<NotesContextType>({
	notes: [],
	activeNote: null,
	setActiveNote: (id: string | null) => console.log(`active note: ${id}`),
	getActiveNote: () => null,
	addNote: (note: Note) => console.log(`Adding note: ${note}`),
	editNote: (note: Note) => console.log(`edited note: ${note}`),
	deleteNote: (id: string) => console.log(`deleting note with id: ${id}`),
	setNotes: (notes: Note[]) => console.log("Set notes: ", notes),
});

interface Props {
	children: React.ReactNode;
}

export const NotesProvider: React.FC<Props> = ({ children }) => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [activeNote, setActiveNote] = useState<string | null>(null);
	const { userId } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			const notesCollection = collection(db, "notes");
			const notesQuery = query(notesCollection, where("userId", "==", userId));
			const unsubscribe = onSnapshot(notesQuery, (snapshot: any) => {
				const notesData = snapshot.docs.map((doc: any) => ({
					id: doc.id,
					...doc.data(),
				})) as Note[];
				setNotes(notesData);
			});
			return () => unsubscribe();
		}
	}, [userId]);

	const getActiveNote = () => {
		return notes.find(({ id }) => id === activeNote);
	};

	const addNote = async (note: Note) => {
		try {
			await addDoc(collection(db, "notes"), note);
			// setNotes((prevNotes) => [note, ...prevNotes]);
			setActiveNote(note.id);
			navigate(`/${note.id}`);
		} catch (err) {
			console.error("Error adding document: ", err);
		}
	};

	const editNote = async (editedNote: Note) => {
		const noteRef = doc(db, "notes", String(editedNote.id));

		try {
			await updateDoc(noteRef, {
				title: editedNote?.title,
				content: editedNote?.content,
				updated_at: Date.now(),
				userId: editedNote?.userId,
			});
			setNotes((prevNotes) => {
				const updatedNotes = prevNotes.map((note) => {
					if (note.id === editedNote.id) {
						return { ...note, ...editedNote };
					}
					return note;
				});
				return updatedNotes;
			});
		} catch (e) {
			console.log("Error adding document: ", e);
		}
	};

	const deleteNote = async (id: string) => {
		try {
			await deleteDoc(doc(db, "notes", id));
			setNotes(notes.filter((note) => note.id !== id));
		} catch (e) {
			console.log("Error deleting document: ", e);
		}
	};

	console.log("context", notes);

	const contextValue: NotesContextType = {
		notes,
		activeNote,
		setActiveNote,
		getActiveNote,
		addNote,
		editNote,
		deleteNote,
		setNotes,
	};

	return (
		<NotesContext.Provider value={contextValue}>
			{children}
		</NotesContext.Provider>
	);
};
