import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Guides from './screens/Guides';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Guides />} />
          <Route path='/home' element={<Guides />} />
          {/* <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignIn />} /> */}
        </Routes>
      </Router>
    </div>
  );
};