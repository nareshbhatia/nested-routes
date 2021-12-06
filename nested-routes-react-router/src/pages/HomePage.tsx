import { Link } from 'react-router-dom';
import { ViewCenteredContainer } from '../components';
import logo from '../assets/bullsfirst-logo.svg';

export function HomePage() {
  return (
    <ViewCenteredContainer className="bg-gradient">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" width="200" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <Link className="btn-link" to="/accounts">
          Show My Accounts
        </Link>
      </div>
    </ViewCenteredContainer>
  );
}
