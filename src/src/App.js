// import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Guides from './screens/Guides';
import Page1 from './pages/index';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </Router>
      <h1>COME UP WITH NAME</h1>
      <br></br>
        
        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
