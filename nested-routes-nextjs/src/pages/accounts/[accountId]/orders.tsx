import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  AccountHeader,
  AccountsSideBar,
  Header,
  HorizontalContainer,
  VerticalContainer,
  ViewVerticalContainer,
} from '../../../components';
import { Account, Order } from '../../../models';
import { API_URL, formatDate } from '../../../utils';

interface OrdersPageProps {
  accounts: Array<Account>;
  orders: Array<Order>;
}

const OrdersPage = ({ accounts, orders }: OrdersPageProps) => {
  const router = useRouter();
  const { accountId, orderId } = router.query;
  return (
    <ViewVerticalContainer>
      <Header />
      <HorizontalContainer className="min-h-0">
        <AccountsSideBar accounts={accounts} />
        <VerticalContainer>
          <AccountHeader />
          <VerticalContainer className="paper border-paper p-4">
            <h2>
              {orders && orders.length > 0
                ? 'Orders'
                : 'There are no orders in this account'}
            </h2>
            {orders && orders.length > 0 && (
              <VerticalContainer>
                <table className="mt-4">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Side</th>
                      <th>Symbol</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="cursor-pointer hover:bg-gray-300"
                        style={
                          order.id === orderId
                            ? { backgroundColor: '#b6e0fe' }
                            : {}
                        }
                        onClick={() => {
                          router.push(
                            `/accounts/${accountId}/orders/${order.id}`
                          );
                        }}
                      >
                        <td>{formatDate(order.createdAt)}</td>
                        <td>{order.side}</td>
                        <td>{order.security.id}</td>
                        <td>{order.status}</td>
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

  const resOrders = await fetch(
    `${API_URL}/orders?accountId=${params?.accountId}`
  );
  const orders = await resOrders.json();

  return {
    props: {
      accounts,
      orders,
    },
  };
};

export default OrdersPage;
