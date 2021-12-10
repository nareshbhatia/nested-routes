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
          const href = `/accounts/${router.query.accountId}/${link.href}`;
          return (
            <li key={link.href}>
              <Link href={href}>
                <a
                  className={
                    router.asPath === href
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
