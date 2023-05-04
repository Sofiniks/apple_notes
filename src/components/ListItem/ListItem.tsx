import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material';
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
    <Box sx={{mb: '15px'}}>
       <Box onClick={onClick} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '10px'}}>
          <Link to={`/${note.id}`} style={{ textDecoration: 'none', color: '#000000', fontWeight: '700' }}>
            {note.title}
          </Link>
          <Delete onClick={handleDeleteNote} />
        </Box> 
        <Box onClick={onClick} sx={{padding: '10px 0'}}>
          <Link to={`/${note.id}`} style={{ textDecoration: 'none', color: '#000000' }}>
            <Typography variant="body1">{note.content}</Typography>
          </Link>
        </Box> 
        <Divider/>
    </Box>
  );
};

export default ListItem;
