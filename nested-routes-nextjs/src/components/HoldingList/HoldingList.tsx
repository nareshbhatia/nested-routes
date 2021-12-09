import { VerticalContainer } from '../Containers';
import { Holding } from '../../models';

export function HoldingList({ holdings }: { holdings: Array<Holding> }) {
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
