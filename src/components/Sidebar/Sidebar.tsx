import React from 'react';
import { Box, Button, List, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {  useNavigate } from 'react-router-dom';

import { useNotes } from '../../hooks/useNotes';
import { Note } from '../../types';
import ListItem from '../ListItem/ListItem';

const Sidebar: React.FC = () => {
  const { notes, addNote, setActiveNote } = useNotes();
  const  navigate = useNavigate();

  const handleAddNote = () => {
    addNote();
    navigate('/create');
  }
  return (
    <>
      <Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '15px'
        }}>
          <Typography component='h1' sx={{fontSize: '18px'}}>
          Notes
        </Typography>
        <Button 
        startIcon={<AddOutlinedIcon/>} sx={{
          fontSize: '12px'
        }}
        onClick={handleAddNote}
        >Add new</Button>
        </Box>
        
        {/* <button onClick={handleAddNote}>Add new</button> */}
        <List>
          {notes.map((note: Note) => (
            <ListItem key={note.id} note={note} onClick={() => setActiveNote(String(note.id))}/>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
