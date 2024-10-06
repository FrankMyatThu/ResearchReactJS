import { Routes, Route, BrowserRouter, Link, Navigate, useNavigate, Outlet} from "react-router-dom";
import React, { Suspense, lazy, Fragment, useState, useEffect, startTransition } from "react";

import Order from "./View/Order";

import AppHeader from './Layout/Header';
import AppSideBar from './Layout/SideBar';
import AppContent from './Layout/Content';
import AppFooter from './Layout/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const components = [
    { path: "/order", component: Order },   
  ];

  function PrivateRoute({ children }) {    
    console.log('PrivateRoute rendered');
    return (      
        <Fragment>          
          <AppHeader />
          <AppSideBar />
            <div className="App-content" >
              {children}              
            </div>
          <AppFooter />          
        </Fragment>      
    );
  }

  return (
    <>
      {components[0].component()}
    </>
    // <Routes>      
    //   {
    //     components.map((route, index) => (
    //       <Route key={index} path={route.path} element={
    //         <PrivateRoute> 
    //           <route.component />             
    //         </PrivateRoute> 
    //       } />
    //     ))
    //   }      
    // </Routes>
  );  
}

export default App;
