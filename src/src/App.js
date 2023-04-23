import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Tracker from "./screens/Tracker";
import Game from "./screens/Game";
import Profile from './screens/Profile';
import AuthProvider from './contexts/AuthContext';

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/game' element={<Game/>} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};