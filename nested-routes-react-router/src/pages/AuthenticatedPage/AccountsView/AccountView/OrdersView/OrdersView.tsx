import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  HorizontalContainer,
  ScrollingContainer,
  VerticalContainer,
} from '../../../../../components';
import { Order } from '../../../../../models';
import { API_URL, formatDate } from '../../../../../utils';

type OrdersQueryKey = readonly ['orders', string | undefined];

async function fetchOrders({
  queryKey,
}: QueryFunctionContext<OrdersQueryKey>): Promise<Array<Order>> {
  const [, accountId] = queryKey;
  const resp = await axios.get(`${API_URL}/orders?accountId=${accountId}`);
  return resp.data as Array<Order>;
}

export const OrdersView = () => {
  const { accountId, orderId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery(['orders', accountId], fetchOrders);

  if (error) {
    throw error;
  }

  return (
    <VerticalContainer className="p-4 min-h-0">
      <h2>
        {isLoading
          ? 'Loading...'
          : orders && orders.length > 0
          ? 'Orders'
          : 'There are no orders in this account'}
      </h2>
      {!isLoading && orders && orders.length > 0 && (
        <HorizontalContainer className="mt-4 min-h-0">
          <ScrollingContainer className="flex-1">
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
          </ScrollingContainer>
          <Outlet />
        </HorizontalContainer>
      )}
    </VerticalContainer>
  );
};
