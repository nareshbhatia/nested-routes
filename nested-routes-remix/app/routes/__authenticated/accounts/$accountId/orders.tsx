import { json, Outlet, useLoaderData, useNavigate, useParams } from 'remix';
import type { LoaderFunction } from 'remix';
import { HorizontalContainer, VerticalContainer } from '~/components';
import { Order } from '~/models';
import { API_URL, formatDate } from '~/utils';

type OrdersViewData = {
  orders: Array<Order>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { accountId } = params;
  const resOrders = await fetch(`${API_URL}/orders?accountId=${accountId}`);
  const orders = await resOrders.json();

  const data: OrdersViewData = {
    orders,
  };

  return json(data);
};

export default function OrdersView() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const orders = data.orders as Array<Order>;

  return (
    <VerticalContainer className="paper border-paper p-4">
      <h2>
        {orders && orders.length > 0
          ? 'Orders'
          : 'There are no orders in this account'}
      </h2>
      {orders && orders.length > 0 && (
        <HorizontalContainer className="mt-4">
          <VerticalContainer>
            <table>
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
                      order.id === orderId ? { backgroundColor: '#b6e0fe' } : {}
                    }
                    onClick={() => {
                      navigate(order.id);
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
          <Outlet />
        </HorizontalContainer>
      )}
    </VerticalContainer>
  );
}
