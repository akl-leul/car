import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModelList from './ModelList'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelList />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
