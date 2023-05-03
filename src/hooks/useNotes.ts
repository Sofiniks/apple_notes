import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export const useNotes = () => {
  const { notes, addNote, deleteNote, editNote, getActiveNote, setActiveNote, activeNote } = useContext(NotesContext);

  return {
    notes,
    activeNote,
    setActiveNote,
    getActiveNote,
    addNote,
    editNote,
    deleteNote,
  };
};

export default useNotes;
