import { Outlet } from 'remix';
import type { MetaFunction } from 'remix';
import {
  Header,
  HorizontalContainer,
  ViewVerticalContainer,
} from '../components';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst',
    description: 'Application to trade securities and manage investments',
  };
};

export default function HomePage() {
  return (
    <ViewVerticalContainer>
      <Header />
      <HorizontalContainer className="min-h-0">
        <Outlet />
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
}
