import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserEdit } from './user-edit';
import { LoginPage } from './login';
import { DetailPage } from './detail';


export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="users/:name" element={<UserEdit />} />
        <Route path="detail/:login" element={<DetailPage />} />
      </Routes>
    </HashRouter>
  );
};
