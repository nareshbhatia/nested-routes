import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Account } from '../../models';
import { ScrollingContainer } from '../Containers';
import { API_URL } from '../../utils';

async function fetchAccounts(): Promise<Array<Account>> {
  const resp = await axios.get(`${API_URL}/accounts`);
  return resp.data as Array<Account>;
}

export const AccountsSideBar = () => {
  const linkStyle = 'hover:text-primary-200 text-sm leading-5 cursor-pointer';

  const {
    isLoading,
    error,
    data: accounts,
  } = useQuery('accounts', fetchAccounts);

  const { accountId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // when accounts are loaded, navigate to the first account
  useEffect(() => {
    if (location.pathname === '/accounts' && accounts && accounts.length > 0) {
      navigate(`${accounts[0].id}/holdings`);
    }
  }, [location, accounts]);

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
            : 'No Accounts'}
        </h1>
        {!isLoading && accounts && accounts.length > 0 && (
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
