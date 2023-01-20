import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SIgnup';
import Signin from './Pages/Signin';
import './App.css';

function App() {
  return (
    <div className="App">
  	<Routes>
			
				<Route path='/-signin' element={<Signin />} />
				<Route path='/-signup' element={<Signup />} />
			
			</Routes>
    </div>
  );
}

export default App;
