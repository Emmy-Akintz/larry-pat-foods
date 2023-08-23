import './App.css';
import Parentpage from './pages/parentpage';
import FullProducts from './pages/fullProducts';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/signuppage';
import { Route, Routes } from 'react-router-dom';

// 
import { useState } from 'react';
// 

function App() {

  const [user, setLoginUser] = useState({

  })

  return (
    <div className="App">

      <Routes>
        <Route path='/'>
          {
            user && user._id ? <Parentpage />:<Loginpage />
          }<Parentpage />
        </Route>
        <Route path='/prodlist' element={<FullProducts />} />
        <Route path='/login' element={<Loginpage setLoginUser={setLoginUser} />} />
        <Route path='/signup' element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
