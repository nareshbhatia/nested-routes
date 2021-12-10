import { useRouter } from 'next/router';
import { VerticalContainer } from '../Containers';
import { Order } from '../../models';
import { formatDate } from '../../utils';

export function OrderList({
  accountId,
  selectedOrderId,
  orders,
}: {
  accountId: string;
  selectedOrderId?: string;
  orders: Array<Order>;
}) {
  const router = useRouter();

  if (orders.length === 0) {
    return null;
  }

  return (
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
                order.id === selectedOrderId
                  ? { backgroundColor: '#b6e0fe' }
                  : {}
              }
              onClick={() => {
                router.push(`/accounts/${accountId}/orders/${order.id}`);
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
  );
}
