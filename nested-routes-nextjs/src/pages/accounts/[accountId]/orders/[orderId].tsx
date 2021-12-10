import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  AccountHeader,
  AccountsSideBar,
  AuthenticatedLayout,
  HorizontalContainer,
  OrderCard,
  OrderList,
  VerticalContainer,
} from '../../../../components';
import { Account, Order } from '../../../../models';
import { API_URL } from '../../../../utils';

const NO_ORDERS = 'There are no orders in this account';

export default function OrderPage({
  accounts,
  orders,
  selectedOrder,
}: {
  accounts: Array<Account>;
  orders: Array<Order>;
  selectedOrder: Order;
}) {
  const router = useRouter();
  const { accountId, orderId } = router.query;

  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
      <VerticalContainer>
        <AccountHeader />
        <VerticalContainer className="paper border-paper p-4">
          <h2>{orders.length > 0 ? 'Orders' : NO_ORDERS}</h2>
          <HorizontalContainer className="mt-4">
            <OrderList
              accountId={accountId as string}
              selectedOrderId={orderId as string | undefined}
              orders={orders}
            />
            <OrderCard order={selectedOrder} />
          </HorizontalContainer>
        </VerticalContainer>
      </VerticalContainer>
    </HorizontalContainer>
  );
}

OrderPage.getLayout = function getLayout(page: ReactElement) {
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

  const resOrder = await fetch(`${API_URL}/orders/${params?.orderId}`);
  const order = await resOrder.json();

  return {
    props: {
      accounts,
      orders,
      selectedOrder: order,
    },
  };
};
