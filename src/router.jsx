import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';

const Main = lazy(() => import('./pages/Main'));
const Details = lazy(() => import('./pages/Details'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path="search/" element={<Main />} />
          <Route path="/details/:nasa_id" element={<Details />} />
          <Route exact path="/" element={<Navigate to="/search" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
