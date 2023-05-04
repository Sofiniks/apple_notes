import React from 'react';
import useNotes from '../../hooks/useNotes';
import { useParams } from 'react-router-dom';
import { Box, Input } from '@mui/material';
import TextField from '@mui/material/TextField';

const NoteEditor: React.FC = () => {
    const {id} = useParams();
    const { notes, editNote, getActiveNote } = useNotes();

    const activeNote = getActiveNote();
    const note: any = notes.find(note => note.id === id) || activeNote || notes[0];
    
    const handleChange = (field: string, text: string) => {
        editNote({...activeNote, [field]: text})
    }
       return (
  <Box sx={{display: 'flex', flexDirection: 'column'}}>
    <TextField 
    value={note.title} 
    onChange={(e) => handleChange("title", e.target.value)} 
    sx={{ "& fieldset": {border: 'none'}}} 
    autoFocus
    />
    <TextField 
    value={note.content} 
    onChange={(e) => handleChange("content", e.target.value)} 
    sx={{ "& fieldset": {border: 'none'}}} 
    />
  </Box>);  
 
};

export default NoteEditor;