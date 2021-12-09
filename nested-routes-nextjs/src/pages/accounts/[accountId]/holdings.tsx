import React from 'react';
import { GetServerSideProps } from 'next';
import {
  AccountHeader,
  AccountsSideBar,
  Header,
  HorizontalContainer,
  VerticalContainer,
  ViewVerticalContainer,
} from '../../../components';
import { Account, Holding } from '../../../models';
import { API_URL } from '../../../utils';

interface HoldingsPageProps {
  accounts: Array<Account>;
  holdings: Array<Holding>;
}

const HoldingsPage = ({ accounts, holdings }: HoldingsPageProps) => {
  return (
    <ViewVerticalContainer>
      <Header />
      <HorizontalContainer className="min-h-0">
        <AccountsSideBar accounts={accounts} />
        <VerticalContainer>
          <AccountHeader />
          <VerticalContainer className="paper border-paper p-4">
            <h2>
              {holdings && holdings.length > 0
                ? 'Holdings'
                : 'There are no holdings in this account'}
            </h2>
            {holdings && holdings.length > 0 && (
              <VerticalContainer>
                <table className="mt-4">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Name</th>
                      <th className="text-right">Qty</th>
                      <th className="text-right">Price</th>
                      <th className="text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding) => (
                      <tr key={holding.id}>
                        <td>{holding.security.id}</td>
                        <td>{holding.security.name}</td>
                        <td className="text-right">{holding.quantity}</td>
                        <td className="text-right">{holding.security.price}</td>
                        <td className="text-right">{holding.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </VerticalContainer>
            )}
          </VerticalContainer>
        </VerticalContainer>
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
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

export default HoldingsPage;
