import { Outlet } from 'react-router-dom';
import { AccountsSideBar, HorizontalContainer } from '../../../components';

export function AccountsView() {
  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar />
      <Outlet />
    </HorizontalContainer>
  );
}
