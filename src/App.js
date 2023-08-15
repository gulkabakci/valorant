import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Agent from './pages/Agent';

function App() {
  return (
    <div className="App ">
       <Router>
       <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/agent"  element={<Agent/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
