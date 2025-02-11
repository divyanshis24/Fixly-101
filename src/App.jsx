
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn'
import Home from './Components/Home';
import Register from './Components/Register';

const App = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/login/register' element={<Register/>}></Route>
      <Route path='/*' element={<h1>404 Error</h1>}></Route>
    </Routes>
  </div>;
};

export default App
