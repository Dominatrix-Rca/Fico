import "./App.css";
import {Route , Routes} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import ProfileThree from "./pages/ProfileThree";
import Order from './pages/Order';
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Order />} />
        {/* <Route path="/client" element={<Client />} /> */}
        <Route path="/profile3" element={<ProfileThree />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </div>
  );
}

export default App;
