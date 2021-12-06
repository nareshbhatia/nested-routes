import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
