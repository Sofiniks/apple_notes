import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Workspace from '../components/Workspace/Workspace';

const MainPage: React.FC = () => {

  return (
    <div>
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default MainPage;