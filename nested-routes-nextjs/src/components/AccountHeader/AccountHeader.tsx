import Link from 'next/link';

export const AccountHeader = () => {
  const linkStyle = 'hover:text-neutral-900 text-sm font-semibold mr-5';

  const links = [
    { href: 'holdings', label: 'Holdings' },
    { href: 'orders', label: 'Orders' },
  ];

  return (
    <nav className="flex items-center h-14 px-4 bg-neutral-50">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>
                <a className={`${linkStyle} text-neutral-400`}>{link.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
