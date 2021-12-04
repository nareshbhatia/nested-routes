import { json, Outlet, useLoaderData, useNavigate } from 'remix';
import type { LoaderFunction } from 'remix';
import { HorizontalContainer } from '~/components';
import { Order } from '~/models';
import { API_URL } from '~/utils';

type OrdersViewData = {
  orders: Array<Order>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const resOrders = await fetch(`${API_URL}/orders?accountId=${id}`);
  const orders = await resOrders.json();

  const data: OrdersViewData = {
    orders,
  };

  return json(data);
};

export default function OrdersView() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const orders = data.orders as Array<Order>;

  return (
    <HorizontalContainer>
      <table>
        <thead>
          <tr>
            <th className="text-left">Date</th>
            <th className="text-left">Side</th>
            <th className="text-left">Symbol</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer"
              onClick={() => {
                navigate(order.id);
              }}
            >
              <td>{order.createdAt}</td>
              <td>{order.side}</td>
              <td>{order.security.id}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </HorizontalContainer>
  );
}
