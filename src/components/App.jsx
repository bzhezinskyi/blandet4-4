import HomePage from 'page/HomePage';
import UserAddPage from 'page/UserAddPage';
import UserDetailsPage from 'page/UserDetailsPage';
import UsersPage from 'page/UsersPage';
import UserUpdataPage from 'page/UserUpdataPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="users/add" element={<UserAddPage />} />
        <Route path="users/updata/:id" element={<UserUpdataPage />} />
      </Route>
    </Routes>
  );
};
