import { Fragment } from 'react';
import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { Order, OrderStatusLookup, OrderTypeLookup } from '~/models';
import { API_URL, formatDate, formatMoney } from '~/utils';

type OrderViewData = {
  order: Order;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { orderId } = params;
  const resOrder = await fetch(`${API_URL}/orders/${orderId}`);
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
    <div className="w-80 ml-4">
      <div className="border-2 rounded p-4">
        <h3>{order ? order.side : 'Order not found'}</h3>
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
}
