import { ReactNode } from 'react';
import { ViewVerticalContainer } from '../Containers';
import { Header } from '../Header';

export function AuthenticatedLayout({
  children,
}: {
  children: ReactNode | Array<ReactNode>;
}) {
  return (
    <ViewVerticalContainer>
      <Header />
      {children}
    </ViewVerticalContainer>
  );
}
