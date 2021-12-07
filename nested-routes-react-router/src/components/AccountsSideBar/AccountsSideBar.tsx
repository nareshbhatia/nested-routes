import axios from 'axios';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Account } from '../../models';
import { ScrollingContainer } from '../Containers';
import { API_URL } from '../../utils';

async function fetchAccounts(): Promise<Array<Account>> {
  const resp = await axios.get(`${API_URL}/accounts`);
  return resp.data as Array<Account>;
}

export const AccountsSideBar = () => {
  const {
    isLoading,
    error,
    data: accounts,
  } = useQuery('accounts', fetchAccounts);

  if (error) {
    throw error;
  }

  return (
    <div className="flex-200px flex flex-col bg-gray-850">
      <ScrollingContainer className="flex-1 p-4">
        <h1 className="font-semibold text-lg leading-6 text-white m-0 mt-2">
          {isLoading
            ? 'Loading...'
            : accounts && accounts.length > 0
            ? 'Accounts'
            : 'No Accounts Found'}
        </h1>
        {!isLoading && accounts && accounts.length > 0 && (
          <ul className="list-none pl-0 my-4">
            {accounts.map((account) => (
              <li
                key={account.id}
                className="text-sm leading-5 text-gray-400 mb-4 cursor-pointer"
              >
                <NavLink to={`${account.id}/holdings`}>{account.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </ScrollingContainer>
    </div>
  );
};
