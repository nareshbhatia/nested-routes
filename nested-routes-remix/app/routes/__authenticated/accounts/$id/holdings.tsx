import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

type HoldingsData = {
  holdings: string;
};

export let loader: LoaderFunction = async ({ params }) => {
  return json({
    holdings: params.id,
  });
};

export default function HoldingsView() {
  const { holdings } = useLoaderData();
  return <div>{holdings}</div>;
}
