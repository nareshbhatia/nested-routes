import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import {
  AccountHeader,
  AccountsSideBar,
  AuthenticatedLayout,
  HoldingList,
  HorizontalContainer,
  VerticalContainer,
} from '../../../components';
import { Account, Holding } from '../../../models';
import { API_URL } from '../../../utils';

const NO_HOLDINGS = 'There are no holdings in this account';

export default function HoldingsPage({
  accounts,
  holdings,
}: {
  accounts: Array<Account>;
  holdings: Array<Holding>;
}) {
  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
      <VerticalContainer>
        <AccountHeader />
        <VerticalContainer className="paper border-paper p-4">
          <h2>{holdings.length > 0 ? 'Holdings' : NO_HOLDINGS}</h2>
          <HoldingList holdings={holdings} />
        </VerticalContainer>
      </VerticalContainer>
    </HorizontalContainer>
  );
}

HoldingsPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // From https://nextjs.org/docs/basic-features/data-fetching:
  //
  // You should not use fetch() to call an API route in getServerSideProps.
  // Instead, directly import the logic used inside your API route. You may
  // need to slightly refactor your code for this approach.
  //
  // Fetching from an external API is fine!

  const resAccounts = await fetch(`${API_URL}/accounts`);
  const accounts = await resAccounts.json();

  const resHoldings = await fetch(
    `${API_URL}/holdings?accountId=${params?.accountId}`
  );
  const holdings = await resHoldings.json();

  return {
    props: {
      accounts,
      holdings,
    },
  };
};
