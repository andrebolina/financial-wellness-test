import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Result from './pages/result';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
