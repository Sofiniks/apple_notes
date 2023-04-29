import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemporaryComponent from './components/TemporaryComponent';

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<TemporaryComponent />}/>
    </Routes>
  );
};

export default App;
