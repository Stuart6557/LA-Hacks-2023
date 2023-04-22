import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignIn />} /> */}
        </Routes>
      </Router>
    </div>
  );
};