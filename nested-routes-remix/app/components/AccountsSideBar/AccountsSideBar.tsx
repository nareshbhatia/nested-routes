import { NavLink } from 'remix';
import { Account } from '../../models';
import { ScrollingContainer } from '../Containers';

export interface AccountsSideBarProps {
  accounts: Array<Account>;
}

export const AccountsSideBar = ({ accounts }: AccountsSideBarProps) => {
  return (
    <div className="flex-200px flex flex-col bg-gray-850">
      <ScrollingContainer className="flex-1 p-4">
        <h1 className="font-semibold text-lg leading-6 text-white m-0 mt-2">
          Accounts
        </h1>
        <ul className="list-none pl-0 my-4">
          {accounts.map((account) => (
            <li
              key={account.id}
              className="text-sm leading-5 text-gray-400 mb-4 cursor-pointer"
            >
              <NavLink to={`${account.id}/orders`}>{account.name}</NavLink>
            </li>
          ))}
        </ul>
      </ScrollingContainer>
    </div>
  );
};
