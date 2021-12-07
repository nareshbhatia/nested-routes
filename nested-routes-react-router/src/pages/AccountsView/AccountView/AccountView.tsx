import { Outlet } from 'react-router';
import { AccountHeader, VerticalContainer } from '../../../components';

export const AccountView = () => {
  return (
    <VerticalContainer>
      <AccountHeader />
      <Outlet />
    </VerticalContainer>
  );
};
