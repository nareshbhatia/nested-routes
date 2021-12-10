import Link from 'next/link';
import { useRouter } from 'next/router';

export const AccountHeader = () => {
  const router = useRouter();
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
              <Link href={`/accounts/${router.query.accountId}/${link.href}`}>
                <a
                  className={
                    // Can't check for full path match, because path may
                    // contain orderId at the end.
                    // Instead look for "holdings" or "orders" in the path.
                    router.asPath.includes(link.href)
                      ? `${linkStyle} text-neutral-900`
                      : `${linkStyle} text-neutral-400`
                  }
                >
                  {link.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
