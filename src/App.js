import Home  from "./pages/Home";
import Register from "./pages/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/create" exact element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
