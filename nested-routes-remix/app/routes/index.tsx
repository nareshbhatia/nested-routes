import type { MetaFunction, LoaderFunction } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst',
    description: 'Application to trade securities and manage investments',
  };
};

export default function HomePage() {
  return <div>Hello World!</div>;
}
