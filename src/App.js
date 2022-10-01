import { Home, Learn } from './Pages/exportPages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;
