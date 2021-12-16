import { ScrollingContainer, VerticalContainer } from '../Containers';
import { Holding } from '../../models';

export function HoldingList({ holdings }: { holdings: Array<Holding> }) {
  if (holdings.length === 0) {
    return null;
  }

  return (
    <ScrollingContainer className="mt-4">
      <table>
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
    </ScrollingContainer>
  );
}
