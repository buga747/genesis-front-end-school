import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';

const Courses = lazy(() => import('pages/Courses'));
const Course = lazy(() => import('pages/Course'));
const NotFound = lazy(() => import('./NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Courses />} />
            <Route path="/course/:courseId" element={<Course />} />
          </Route>
          {/* Handle 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Suspense>
    </>
  );
};
