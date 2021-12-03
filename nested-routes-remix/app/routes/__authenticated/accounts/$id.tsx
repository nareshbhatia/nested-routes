import { Outlet } from 'remix';
import { AccountHeader, VerticalContainer } from '~/components';

export default function AccountView() {
  return (
    <VerticalContainer>
      <AccountHeader />
      <Outlet />
    </VerticalContainer>
  );
}
