import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { Order } from '~/models';
import { API_URL } from '~/utils';

type OrderViewData = {
  order: Order;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const resOrder = await fetch(`${API_URL}/orders/${id}`);
  const order = await resOrder.json();

  const data: OrderViewData = {
    order,
  };

  return json(data);
};

export default function OrderView() {
  const data = useLoaderData();
  const order = data.order as Order;

  return (
    <div>
      <p>Date: {order.createdAt}</p>
      <p>Side: {order.side}</p>
      <p>Symbol: {order.security.id}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}
