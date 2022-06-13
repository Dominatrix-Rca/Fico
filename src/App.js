import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import ProfileThree from "./pages/ProfileThree";
import Order from './pages/Order';
import Homepage from "./pages/Homepage";
import Profile from "./pages/profile";
import ProfileTwo from "./pages/ProfileTwo";
import Dashboard from "./pages/Dashboard";
import Clientfun from './pages/clientJoin';
// import Overview from './pages/overview';

function App() {
  return (
    <BrowserRouter basename='/fico'>
        <Routes >
          <Route index element={<Homepage />} />
          <Route path='/clients' element={<Clientfun />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Order />} />
          {/* <Route path="/client" element={<Client />} /> */}
          <Route path="/profile3" element={<ProfileThree />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiletwo" element={<ProfileTwo />} />
          <Route path="/overview" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
