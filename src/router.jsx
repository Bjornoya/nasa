import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import Error from './pages/Error';

const Main = lazy(() => import('./pages/Main'));
const Details = lazy(() => import('./pages/Details'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path=":search" element={<Main />} />
          <Route path="/details/:nasa_id" element={<Details />} />
          <Route exact path="/" element={<Navigate to="/search" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
