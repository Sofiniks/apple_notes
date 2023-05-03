import React, { createContext, useState } from "react";
import uuid from "react-uuid";
import { Note, NotesContextType } from "../types";
import { notes as mocks} from "../data/mocks";

export const NotesContext = createContext<NotesContextType>({
  notes: [],
  activeNote: null,
  setActiveNote: (id: string) => console.log(`active note: ${id}`),
  getActiveNote: () => null,
  addNote: () => console.log(`adding empty note`),
  editNote: (note: Note) => console.log(`edited note: ${note}`),
  deleteNote: (id: string) => console.log(`deleting note with id: ${id}`),
});

interface Props {
  children: React.ReactNode;
}

export const NotesProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([...mocks]);
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const editNote = (editedNote: Note) => {
    const newNotes = notes.map((note) => {
      if (note.id === editedNote.id) {
        return editedNote;
      }

      return note;
    });

    setNotes(newNotes);
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const contextValue: NotesContextType = {
    notes,
    activeNote,
    setActiveNote,
    getActiveNote,
    addNote,
    editNote,
    deleteNote,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

