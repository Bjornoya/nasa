import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

const Main = lazy(() => import('./pages/Main'));
const Details = lazy(() => import('./pages/Details'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path="/:query" element={<Main />} />
          <Route path="/details/:nasa_id" element={<Details />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
