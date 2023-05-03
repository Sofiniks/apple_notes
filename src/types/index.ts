export interface Note {
  id?: string;
  title?: string;
  content?: string;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

export type NotesContextType = {
  notes: Note[];
  activeNote: string | null;
  setActiveNote: (id: string) => void;
  getActiveNote: () => Note | null | undefined;
  addNote: () => void;
  editNote: (note: Note) => void;
  deleteNote: (id: string) => void;
};

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
