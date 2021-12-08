import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { VerticalContainer } from '~/components';
import { Holding } from '~/models';
import { API_URL } from '~/utils';

type HoldingsViewData = {
  holdings: Array<Holding>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { accountId } = params;
  const resHoldings = await fetch(`${API_URL}/holdings?accountId=${accountId}`);
  const holdings = await resHoldings.json();

  const data: HoldingsViewData = {
    holdings,
  };

  return json(data);
};

export default function HoldingsView() {
  const data = useLoaderData();
  const holdings = data.holdings as Array<Holding>;

  return (
    <VerticalContainer className="paper border-paper p-4">
      <h2>
        {holdings && holdings.length > 0
          ? 'Holdings'
          : 'There are no holdings in this account'}
      </h2>
      {holdings && holdings.length > 0 && (
        <VerticalContainer>
          <table className="mt-4">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th className="text-right">Qty</th>
                <th className="text-right">Price</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding) => (
                <tr key={holding.id}>
                  <td>{holding.security.id}</td>
                  <td>{holding.security.name}</td>
                  <td className="text-right">{holding.quantity}</td>
                  <td className="text-right">{holding.security.price}</td>
                  <td className="text-right">{holding.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VerticalContainer>
      )}
    </VerticalContainer>
  );
}
