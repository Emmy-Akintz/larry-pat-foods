import './App.css';
import Parentpage from './pages/parentpage';
import FullProducts from './pages/fullProducts';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/signuppage';
import { Route, Routes } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ForgotPass from './pages/ForgotPass';
import ManagerDashbord from './pages/ManagerDashbord'
import AdminDashbord from './pages/AdminDashbord'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route path='/' element={<Parentpage />} />
            <Route path='/prodlist' element={<FullProducts />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/signup' element={<Signuppage />} />
            <Route path='/forgotPass' element={<ForgotPass />} />
            {/* <Route path='/card/:id' element={< />} /> */}
            <Route path='/manager-dashbord' element={<ManagerDashbord />} />
            <Route path='/admin-dashbord' element={<AdminDashbord />} />
          </Routes>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;