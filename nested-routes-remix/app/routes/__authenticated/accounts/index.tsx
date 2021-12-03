import { json, Outlet, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { AccountsSideBar, HorizontalContainer } from '~/components';
import { Account } from '~/models';
import { API_URL } from '~/utils';

type AccountsPageData = {
  accounts: Array<Account>;
};

export let loader: LoaderFunction = async () => {
  const resAccounts = await fetch(`${API_URL}/accounts`);
  const accounts = await resAccounts.json();

  let data: AccountsPageData = {
    accounts,
  };

  return json(data);
};

export default function AccountsView() {
  const { accounts } = useLoaderData<AccountsPageData>();

  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar accounts={accounts} />
      <Outlet />
    </HorizontalContainer>
  );
}
