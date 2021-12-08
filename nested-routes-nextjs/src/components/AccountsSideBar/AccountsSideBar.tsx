import Link from 'next/link';
import { Account } from '../../models';
import { ScrollingContainer } from '../Containers';

export interface AccountsSideBarProps {
  accounts: Array<Account>;
}

export const AccountsSideBar = ({ accounts }: AccountsSideBarProps) => {
  const linkStyle = 'hover:text-primary-200 text-sm leading-5 cursor-pointer';

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
                <Link href={`${account.id}/holdings`}>
                  <a className={`${linkStyle} text-gray-400`}>{account.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ScrollingContainer>
    </div>
  );
};
