import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home/HomePage';
import RegisterUser from './pages/Register/RegisterUser';
import ListUsers from './pages/List/ListUsers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='Register' element={<RegisterUser previousPage={"Home"} />} />
      <Route path='ListUsers' element={<ListUsers />} />
    </Routes>
  );
}

export default App;
