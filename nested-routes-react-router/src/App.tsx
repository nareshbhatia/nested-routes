import { Routes, Route } from 'react-router-dom';
import {
  AccountsView,
  AccountView,
  AuthenticatedPage,
  HoldingsView,
  HomePage,
  NoAccountSelected,
  NotFoundPage,
  OrdersView,
  SettingsView,
} from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<AuthenticatedPage />}>
        <Route path="/accounts" element={<AccountsView />}>
          <Route index element={<NoAccountSelected />} />
          <Route path=":accountId" element={<AccountView />}>
            <Route path="holdings" element={<HoldingsView />} />
            <Route path="orders" element={<OrdersView />} />
          </Route>
        </Route>
        <Route path="/settings" element={<SettingsView />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
