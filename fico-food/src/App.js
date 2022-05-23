import "./App.css";
import {Route , Routes} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import ProfileThree from "./pages/ProfileThree";
import ClientJoin from "../src/components/client/clientJoin";
import Overview from "../src/components/overview/overview";
import Order from './pages/Order';
import Overview from "./pages/OverView-E";
function App() {
  return (
    <div>
      <Routes>
         <Route index element={<Home />} /> 
         <Route path="/client" element={<ClientJoin />} />
         <Route path="/overview" element={<Overview/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/profile3" element={<ProfileThree />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </div>
  );
}

export default App;
