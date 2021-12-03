import { Link } from 'remix';

export const Navbar = () => {
  return (
    <nav className="flex items-center min-h-14 px-4">
      <span className="flex-1 text-white text-xl leading-none font-normal">
        Bullsfirst
      </span>
      <Link className="text-neutral-200 leading-none" to="/">
        Sign out
      </Link>
    </nav>
  );
};
