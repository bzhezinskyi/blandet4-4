import HomePage from 'page/HomePage';
import UserDetailsPage from 'page/UserDetailsPage';
import UsersPage from 'page/UsersPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
