import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Result from './pages/result';

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
