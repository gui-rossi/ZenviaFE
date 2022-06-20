import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home/HomePage';
import RegisterUserPage from './pages/Register/RegisterUserPage';
import ListUsersPage from './pages/List/ListUsersPage';
import { UserProvider } from './provider/UserContext';

// TODO@: Move routes into a separate file

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='User' element={<RegisterUserPage />} />
        <Route path='ListUsers' element={<ListUsersPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
