import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SIgnup';
import './App.css';

function App() {
  return (
    <div className="App">
  	<Routes>
				{/* <Route path='/' element={<Welcome />} />
				<Route path='/-login' element={<Login />} /> */}
				<Route path='/-signup' element={<Signup />} />
			
			</Routes>
    </div>
  );
}

export default App;
