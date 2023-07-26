import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import './Pages.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    
    </Routes>
  );
}

export default App;
