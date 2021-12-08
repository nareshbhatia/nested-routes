import { useRouter } from 'next/router';
import { MdLogout, MdSettings } from 'react-icons/md';

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center min-h-14 px-4">
      <span className="flex-1 text-white text-xl leading-none font-normal">
        Bullsfirst
      </span>

      <MdSettings
        className="h-5 w-5 text-neutral-200 hover:text-neutral-100"
        onClick={() => {
          router.push('/settings');
        }}
      />
      <MdLogout
        className="h-5 w-5 text-neutral-200 hover:text-neutral-100 ml-3"
        onClick={() => {
          router.push('/');
        }}
      />
    </nav>
  );
};
