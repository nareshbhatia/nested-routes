import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ViewCenteredContainer } from '../components';
import logo from '../../public/images/bullsfirst-logo.svg';

const HomePage: NextPage = () => {
  return (
    <ViewCenteredContainer className="bg-gradient">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="logo" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <Link href="/accounts">
          <a className="btn-link">Show My Accounts</a>
        </Link>
      </div>
    </ViewCenteredContainer>
  );
};

export default HomePage;
