import { MdLogout, MdSettings } from 'react-icons/md';
import { useNavigate } from 'remix';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center min-h-14 px-4">
      <span className="flex-1 text-white text-xl leading-none font-normal">
        Bullsfirst
      </span>

      <MdSettings
        className="text-neutral-200"
        onClick={() => {
          navigate('/settings');
        }}
      />
      <MdLogout
        className="text-neutral-200 ml-3"
        onClick={() => {
          navigate('/');
        }}
      />
    </nav>
  );
};
