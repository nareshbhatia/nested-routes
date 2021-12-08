import { Fragment } from 'react';
import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  Order,
  OrderStatusLookup,
  OrderTypeLookup,
} from '../../../../../models';
import { API_URL, formatDate, formatMoney } from '../../../../../utils';

type OrderQueryKey = readonly ['order', string | undefined];

async function fetchOrder({
  queryKey,
}: QueryFunctionContext<OrderQueryKey>): Promise<Order> {
  const [, orderId] = queryKey;
  const resp = await axios.get(`${API_URL}/orders/${orderId}`);
  return resp.data as Order;
}

export const OrderView = () => {
  const { orderId } = useParams();
  const {
    isLoading,
    error,
    data: order,
  } = useQuery(['order', orderId], fetchOrder);

  if (error) {
    throw error;
  }

  return (
    <div className="w-80 ml-4">
      <div className="border-2 rounded p-4">
        <h3>
          {isLoading ? 'Loading...' : order ? order.side : 'Order not found'}
        </h3>
        {order && (
          <Fragment>
            <p>
              <span className="font-semibold tracking-wider mr-1">
                {order.security.id}
              </span>{' '}
              {order.security.name}
            </p>
            <p className="mt-2">{order.quantity} shares</p>
            <p>
              {OrderTypeLookup[order.type]} order
              {order.limitPrice && (
                <span>&nbsp;@ {formatMoney(order.limitPrice, 'USD')}</span>
              )}
            </p>
            <p>
              <span>{OrderStatusLookup[order.status]}</span> on{' '}
              {formatDate(order.createdAt)}
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};
