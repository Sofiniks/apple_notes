import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import useAuth from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  const { user } = useAuth();
  console.log('User', user);

  return (
    <NotesProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />

              <Route path="/notes" element={<MainPage />} />
              <Route path="/notes/:id" element={<MainPage />} />
              <Route path="/notes/create" element={<MainPage />} />
       
        </Routes>
      </AuthProvider>
    </NotesProvider>
  );
};

export default App;

// import { Route, Routes } from 'react-router-dom';
// import { NotesProvider } from './context/NotesContext';
// import { AuthProvider } from './context/AuthContext';

// import LoginPage from './pages/LoginPage';
// import MainPage from './pages/MainPage';

// const App: React.FC = () => {
//   return (
//     <NotesProvider>
//       <AuthProvider>
//         <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/notes" element={<MainPage />} />
//         <Route path="/notes/:id" element={<MainPage />} />
//         <Route path="/notes/create" element={<MainPage />} />
//     </Routes>
//       </AuthProvider>
//     </NotesProvider>
//   );
// };

// export default App;
