import './App.css'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Parentpage from './pages/parentpage'
import FullProducts from './pages/fullProducts'
import Loginpage from './pages/loginpage';
import Signuppage from './pages/signuppage';
import ForgotPass from './pages/ForgotPass';
import ResetPassword from './pages/ResetPassword';
import ManagerDashbord from './pages/ManagerDashbord'
import AdminDashbord from './pages/AdminDashbord'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Parentpage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/prodlist' element={<FullProducts />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/signup' element={<Signuppage />} />
            <Route path='/forgotPass' element={<ForgotPass />} />
            <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
            <Route path='/manager-dashbord' element={<ManagerDashbord />} />
            <Route path='/admin-dashbord' element={<AdminDashbord />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
