import React from "react";
import { NameCollection } from "./name-collection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LoginPage} from './login';
import {ListPage} from './list';
import {DetailPage} from './detail';
import { ErrorBoundary } from "./demo";
import { NameEdit } from "./name-edit";
import { ThemeProvider } from "./language.context";


export const App = () => {
return(
  <ErrorBoundary>
<ThemeProvider>
  <Router>
     <Routes>
       <Route path="/" element={<LoginPage/>} />
       <Route path="/list" element={<ListPage/>} />
       <Route path="/detail/:login" element={<DetailPage/>} />
     </Routes>
   </Router>
   </ThemeProvider>
   </ErrorBoundary>
)
}