import React from 'react';
import useNotes from '../../hooks/useNotes';
import { useParams } from 'react-router-dom';

const NoteEditor: React.FC = () => {
    const {id} = useParams();
    const { notes, editNote, getActiveNote } = useNotes();

    const activeNote = getActiveNote();
    const note: any = notes.find(note => note.id === id) || activeNote || notes[0];
    
    const handleChange = (field: string, text: string) => {
        editNote({...activeNote, [field]: text})
    }
    console.log('Note', note);
       return (
  <div>
    
    <input value={note?.title} onChange={(e) => handleChange("title", e.target.value)}/>
    <textarea value={note?.content} onChange={(e) => handleChange("content", e.target.value)}/>
    
  </div>);  
 
};

export default NoteEditor;