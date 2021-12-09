import React from 'react';
import {
  AccountsSideBar,
  Header,
  HorizontalContainer,
  ViewVerticalContainer,
} from '../../components';
import { Account } from '../../models';
import { API_URL } from '../../utils';

interface AccountsPageProps {
  accounts: Array<Account>;
}

const AccountsPage = ({ accounts }: AccountsPageProps) => {
  return (
    <ViewVerticalContainer>
      <Header />
      <HorizontalContainer className="min-h-0">
        <AccountsSideBar accounts={accounts} />
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
};

export async function getServerSideProps() {
  // From https://nextjs.org/docs/basic-features/data-fetching:
  //
  // You should not use fetch() to call an API route in getServerSideProps.
  // Instead, directly import the logic used inside your API route. You may
  // need to slightly refactor your code for this approach.
  //
  // Fetching from an external API is fine!

  const resAccounts = await fetch(`${API_URL}/accounts`);
  const accounts = await resAccounts.json();

  return {
    props: {
      accounts,
    },
  };
}

export default AccountsPage;
