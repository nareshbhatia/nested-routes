import React, { ReactElement } from 'react';
import {
  AccountsSideBar,
  AuthenticatedLayout,
  HorizontalContainer,
} from '../../components';
import { Account } from '../../models';
import { API_URL } from '../../utils';

export default function AccountsPage({
  accounts,
}: {
  accounts: Array<Account>;
}) {
  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
    </HorizontalContainer>
  );
}

AccountsPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
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
