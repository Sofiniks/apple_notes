import {  Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import './styles/GlobalStyles.css';
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const App: React.FC = () => {

  return (
    <NotesProvider>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage isRegister/>} />
          <Route path="/" element={<PrivateRoute><MainPage /></PrivateRoute>} />
         <Route path="/:id" element={<PrivateRoute><MainPage /></PrivateRoute>} />
         <Route path="/create" element={<PrivateRoute><MainPage /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </NotesProvider>
  );
};

export default App;
