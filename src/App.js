import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
       <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
