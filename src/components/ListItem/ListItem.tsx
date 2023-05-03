import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { useNotes } from '../../hooks/useNotes';
import { Note } from '../../types';

interface Props {
  note: Note;
  onClick: () => void;
}

const ListItem: React.FC<Props> = ({ note, onClick }) => {
  const { deleteNote } = useNotes();

  const handleDeleteNote = () => {
    deleteNote(note.id || '1');
  };

  return (
    <div>
      <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none' }}>
       <button onClick={onClick}><Typography variant="h6">{note.title}</Typography></button> 
        <button onClick={onClick}><Typography variant="body1">{note.content}</Typography></button>
      </Link>
      <Delete onClick={handleDeleteNote} />
    </div>
  );
};

export default ListItem;
