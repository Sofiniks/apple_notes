import { useContext, useState } from "react";
import { getDocs, collection, query, where } from "@firebase/firestore";
import { NotesContext } from "../context/NotesContext";
import { db } from "../utils/firebase";
import { Note } from "../types";

export const useNotes = () => {
	const [loading, setLoading] = useState(false);
	const {
		notes,
		addNote,
		deleteNote,
		editNote,
		getActiveNote,
		setActiveNote,
		activeNote,
		setNotes,
	} = useContext(NotesContext);

	const fetchNotes = async (userId: string) => {
		setLoading(true);
		try {
			const querySnapshot = await getDocs(
				query(collection(db, "notes"), where("userId", "==", userId))
			);
			const fetchedNotes = querySnapshot.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});
			setNotes(fetchedNotes as Note[]);
			setLoading(false);
		} catch (e) {
			console.error("Error getting documents: ", e);
		}
	};
	return {
		notes,
		activeNote,
		setActiveNote,
		getActiveNote,
		addNote,
		editNote,
		deleteNote,
		setNotes,
		fetchNotes,
		loading,
	};
};

export default useNotes;
