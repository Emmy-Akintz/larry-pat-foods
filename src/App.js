import './App.css';
import Parentpage from './pages/parentpage';
import FullProducts from './pages/fullProducts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Parentpage />} />
        <Route path='/prodlist' element={<FullProducts />} />
      </Routes>
    </div>
  );
}

export default App;
