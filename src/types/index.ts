
export interface Note {
	id: string;
	userId: string;
	title?: string;
	content?: string;
	updated_at: Date | string;
}

export type NotesContextType = {
  notes: Note[];
  activeNote: string | null | Note;
  setActiveNote: (id: string | null) => void;
  getActiveNote: () => Note | null | undefined;
  addNote: (note: Note) => void;
  editNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  setNotes: (notes: Note[]) => void;
};

export type AuthContextType = {
  user: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
