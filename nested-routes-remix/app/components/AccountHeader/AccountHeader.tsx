import { NavLink } from 'remix';

export const AccountHeader = () => {
  const linkStyle = 'hover:text-neutral-900 text-sm font-semibold mr-5';

  const links = [
    { to: 'holdings', label: 'Holdings' },
    { to: 'orders', label: 'Orders' },
  ];

  return (
    <nav className="flex items-center h-14 px-4 bg-neutral-50">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? `${linkStyle} text-neutral-900`
                    : `${linkStyle} text-neutral-400`
                }
                end
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
