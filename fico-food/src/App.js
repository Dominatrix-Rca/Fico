import "./App.css";
import {Route , Routes} from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import ProfileThree from "./pages/ProfileThree";
import ClientJoin from "../src/components/client/clientJoin";
import Overview2 from "../src/components/overview/overview";
import Order from './pages/Order';
import Overview from "./pages/OverView-E";
import Homepage from './pages/Homepage';
import App2 from './components/useEffect';
function App() {
  return (
    <div>
      <Routes>
         <Route index element={<Homepage />} /> 
         <Route path="/client" element={<ClientJoin />} />
         <Route path="/overview" element={<Overview/>} />
         <Route path="/overview2" element={<Overview2/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<App2 />}  />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/profile3" element={<ProfileThree />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
