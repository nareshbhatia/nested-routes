import { Link, useLocation } from 'remix';

export const AccountHeader = () => {
  const linkStyle = 'hover:text-neutral-900 text-sm font-semibold mr-5';
  const location = useLocation();

  const links = [
    { to: 'holdings', label: 'Holdings' },
    { to: 'orders', label: 'Orders' },
  ];

  return (
    <nav className="flex items-center min-h-14 px-4 bg-neutral-50">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  // NavLink will not work here because path may contain
                  // orderId at the end.
                  // Instead look for "holdings" or "orders" in the path.
                  location.pathname.includes(link.to)
                    ? `${linkStyle} text-neutral-900`
                    : `${linkStyle} text-neutral-400`
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
