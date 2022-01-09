import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellnessTest from "pages/wellness-test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WellnessTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
