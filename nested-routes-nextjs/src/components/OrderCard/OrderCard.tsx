import { Fragment } from 'react';
import { Order, OrderStatusLookup, OrderTypeLookup } from '../../models';
import { formatDate, formatMoney } from '../../utils';

export function OrderCard({ order }: { order: Order }) {
  return (
    <div className="w-80 ml-4">
      <div className="border-2 rounded p-4">
        <h3>{order.side}</h3>
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
      </div>
    </div>
  );
}
