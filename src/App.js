import './App.css';
import Parentpage from './pages/parentpage';
import FullProducts from './pages/fullProducts';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/signuppage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Parentpage />} />
        <Route path='/prodlist' element={<FullProducts />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
