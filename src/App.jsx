import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./Views/Landingpage"

import Context from "./Context";
import Login from "./Views/Login";
import Register from "./Views/Register";

import UserProfile from "./Views/UserProfile";
import UserHome from "./Views/UserHome";
import TenantProfile from "./Components/TenantProfile";
import TenantHome from "./Views/TenantHome";
import UserCanchas from "./Views/Canchas/UserCanchas";



const { Provider } = Context;

function App() {
  return (
    <div className="App" >
      <Provider>
        <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/logout" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user/canchas" element={<UserCanchas />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/dashboard/:id" element={<UserHome />} />
              <Route path="/tenant/profile/" element={<TenantProfile/>} />
              <Route path="/tenant/dashboard/:id" element={<TenantHome />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
