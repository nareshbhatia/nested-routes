import { Link, useParams } from 'remix';
import { Account } from '../../models';
import { ScrollingContainer } from '../Containers';

export interface AccountsSideBarProps {
  accounts: Array<Account>;
}

export const AccountsSideBar = ({ accounts }: AccountsSideBarProps) => {
  const linkStyle = 'hover:text-primary-200 text-sm leading-5 cursor-pointer';
  const { accountId } = useParams();

  return (
    <div className="flex-200px flex flex-col bg-gray-850">
      <ScrollingContainer className="flex-1 p-4">
        <h1 className="font-semibold text-lg leading-6 text-white m-0 mt-2">
          {accounts && accounts.length > 0 ? 'Accounts' : 'No Accounts'}
        </h1>
        {accounts && accounts.length > 0 && (
          <ul className="list-none pl-0 my-4">
            {accounts.map((account) => (
              <li key={account.id} className="mb-4">
                <Link
                  to={`${account.id}/holdings`}
                  className={
                    // NavLink will not work here because path may contain
                    // "orders" at the end instead of "holdings".
                    // Instead look for accountId match.
                    accountId === account.id
                      ? `${linkStyle} text-primary-200`
                      : `${linkStyle} text-gray-400`
                  }
                >
                  {account.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ScrollingContainer>
    </div>
  );
};
