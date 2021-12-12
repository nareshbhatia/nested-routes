import { useEffect } from 'react';
import { json, Outlet, useLoaderData, useLocation, useNavigate } from 'remix';
import type { LoaderFunction } from 'remix';
import { AccountsSideBar, HorizontalContainer } from '~/components';
import { Account } from '~/models';
import { API_URL } from '~/utils';

type AccountsViewData = {
  accounts: Array<Account>;
};

export let loader: LoaderFunction = async () => {
  const resAccounts = await fetch(`${API_URL}/accounts`);
  const accounts = await resAccounts.json();

  let data: AccountsViewData = {
    accounts,
  };

  return json(data);
};

export default function AccountsView() {
  const { accounts } = useLoaderData<AccountsViewData>();
  const location = useLocation();
  const navigate = useNavigate();

  // if location is not pointing to any account, navigate to the first account
  useEffect(() => {
    if (location.pathname === '/accounts' && accounts && accounts.length > 0) {
      navigate(`${accounts[0].id}/holdings`);
    }
  }, [location, accounts]);

  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
      <Outlet />
    </HorizontalContainer>
  );
}
