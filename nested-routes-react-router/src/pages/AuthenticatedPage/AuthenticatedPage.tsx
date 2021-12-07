import { Outlet } from 'react-router-dom';
import { Header, ViewVerticalContainer } from '../../components';

export function AuthenticatedPage() {
  return (
    <ViewVerticalContainer>
      <Header />
      <Outlet />
    </ViewVerticalContainer>
  );
}
