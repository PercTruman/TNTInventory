import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SIgnup';
import Signin from './Pages/Signin';
import Orders from './Pages/Orders';
import Pods from './Pages/Pods';
import Fireworks from './Pages/Fireworks';

import './App.css';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/-signin' element={<Signin />} />
            <Route path='/-signup' element={<Signup />} />
            <Route path='/-orders' element={<Orders />} />
            <Route path='/-pods' element={<Pods />} />
            <Route path='/-fireworks' element={<Fireworks />} />
        </Routes>
    </div>
  );
}

export default App;
