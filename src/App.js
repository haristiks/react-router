import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import './Pages.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  );
}

export default App;
