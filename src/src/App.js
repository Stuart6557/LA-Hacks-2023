// import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guides from './screens/Guides';

function App() {
  return (
    <div className="App">
      <h1>COME UP WITH NAME</h1>
      <br></br>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={Guides} /> */}
          <Route path="/" element={ <Guides /> } />
        </Routes>
      </BrowserRouter>
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
