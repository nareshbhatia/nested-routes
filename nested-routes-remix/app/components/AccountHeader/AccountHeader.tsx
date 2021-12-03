import { NavLink } from 'remix';

export const AccountHeader = () => {
  const linkStyle = 'text-neutral-600 text-sm font-semibold mr-5';

  return (
    <nav className="flex items-center h-14 px-4 bg-neutral-50">
      <ul className="flex">
        <li>
          <NavLink className={linkStyle} to="holdings" end>
            Holdings
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="orders" end>
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
