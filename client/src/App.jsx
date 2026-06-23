import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout, { PageLoader } from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}
