import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  AccountHeader,
  AccountsSideBar,
  AuthenticatedLayout,
  HorizontalContainer,
  OrderList,
  ScrollingContainer,
  VerticalContainer,
} from '../../../../components';
import { Account, Order } from '../../../../models';
import { API_URL } from '../../../../utils';

const NO_ORDERS = 'There are no orders in this account';

export default function OrdersPage({
  accounts,
  orders,
}: {
  accounts: Array<Account>;
  orders: Array<Order>;
}) {
  const router = useRouter();
  const { accountId, orderId } = router.query;

  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
      <VerticalContainer>
        <AccountHeader />
        <VerticalContainer className="p-4 min-h-0">
          <h2>{orders.length > 0 ? 'Orders' : NO_ORDERS}</h2>
          <HorizontalContainer className="mt-4 min-h-0">
            <ScrollingContainer className="flex-1">
              <OrderList
                accountId={accountId as string}
                selectedOrderId={orderId as string | undefined}
                orders={orders}
              />
            </ScrollingContainer>
            {orders.length > 0 && (
              <div className="w-80 ml-4 py-2">
                <p className="text-xl">Select an order to view details</p>
              </div>
            )}
          </HorizontalContainer>
        </VerticalContainer>
      </VerticalContainer>
    </HorizontalContainer>
  );
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
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
