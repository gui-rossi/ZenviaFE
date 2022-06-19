import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home/HomePage';
import RegisterUser from './pages/Register/RegisterUser';
import ListUsers from './pages/List/ListUsers';
import { UserProvider } from './provider/UserContext';

// TODO@: Move routes into a separate file

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Register' element={<RegisterUser previousPage={"Home"} />} />
        <Route path='ListUsers' element={<ListUsers previousPage={"Home"} />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
