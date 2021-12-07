import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { VerticalContainer } from '../../../../components';
import { Holding } from '../../../../models';
import { API_URL } from '../../../../utils';

type HoldingsQueryKey = readonly ['holdings', string | undefined];

async function fetchHoldings({
  queryKey,
}: QueryFunctionContext<HoldingsQueryKey>): Promise<Array<Holding>> {
  const [, accountId] = queryKey;
  const resp = await axios.get(`${API_URL}/holdings?accountId=${accountId}`);
  return resp.data as Array<Holding>;
}

export const HoldingsView = () => {
  const { accountId } = useParams();
  const {
    isLoading,
    error,
    data: holdings,
  } = useQuery(['holdings', accountId], fetchHoldings);

  if (error) {
    throw error;
  }

  return (
    <VerticalContainer className="p-2">
      <VerticalContainer className="paper border-paper p-2">
        <h2>
          {isLoading
            ? 'Loading...'
            : holdings && holdings.length > 0
            ? 'Holdings'
            : 'There are no holdings in this account'}
        </h2>
        {!isLoading && holdings && holdings.length > 0 && (
          <table className="mt-2">
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
        )}
      </VerticalContainer>
    </VerticalContainer>
  );
};
