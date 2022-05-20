import "./App.css";
import NavBar from "./components/navBar";
import {Route , Routes} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import ProfileThree from "./pages/ProfileThree";
function App() {
  return (
    <div>
      <ProfileThree />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/client" element={<Client />} />
        */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </div>
  );
}

export default App;
