import './App.css';
import Parentpage from './pages/parentpage';
import FullProducts from './pages/fullProducts';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/signuppage';
import { Route, Routes } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

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
          </Routes>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
