import { Routes, Route } from 'react-router-dom';
import {
  AccountsView,
  AuthenticatedPage,
  HomePage,
  NotFoundPage,
} from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<AuthenticatedPage />}>
        <Route path="/accounts" element={<AccountsView />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
