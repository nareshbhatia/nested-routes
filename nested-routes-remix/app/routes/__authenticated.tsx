import { Outlet } from 'remix';
import type { MetaFunction } from 'remix';
import { Header, ViewVerticalContainer } from '~/components';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst',
    description: 'Application to trade securities and manage investments',
  };
};

export default function AuthenticatedPage() {
  return (
    <ViewVerticalContainer>
      <Header />
      <Outlet />
    </ViewVerticalContainer>
  );
}
