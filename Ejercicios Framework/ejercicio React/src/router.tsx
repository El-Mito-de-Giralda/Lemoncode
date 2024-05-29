import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserEdit } from './user-edit';
import { LoginPage } from './login';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="users/:name" element={<UserEdit />} />
      </Routes>
    </HashRouter>
  );
};
