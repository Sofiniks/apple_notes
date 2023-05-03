import React from 'react';
import { Box, List, Toolbar, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

import { useNotes } from '../../hooks/useNotes';
import { Note } from '../../types';
import ListItem from '../ListItem/ListItem';

const Sidebar: React.FC = () => {
  const { notes, addNote, setActiveNote } = useNotes();
  const  navigate = useNavigate();

  const handleAddNote = () => {
    addNote();
    navigate('/notes/create');
  }
  return (
    <>
      <Toolbar />
      <Box>
        <Typography>
          Notes
        </Typography>
        <button onClick={handleAddNote}>Add new</button>
        <List sx={{ ml: 2, mt: 2 }}>
          {notes.map((note: Note) => (
            <ListItem key={note.id} note={note} onClick={() => setActiveNote(String(note.id))}/>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
