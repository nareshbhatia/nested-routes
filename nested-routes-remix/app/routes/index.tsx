import { useNavigate } from 'remix';
import type { MetaFunction } from 'remix';
import { ViewCenteredContainer } from '~/components';
import logo from '~/assets/bullsfirst-logo.svg';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst',
    description: 'Application to trade securities and manage investments',
  };
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <ViewCenteredContainer className="bg-gradient">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" width="200" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <button
          className="px-6 py-3 rounded bg-primary-800 text-white font-medium"
          onClick={() => navigate('/accounts')}
        >
          Show My Accounts
        </button>
      </div>
    </ViewCenteredContainer>
  );
}
