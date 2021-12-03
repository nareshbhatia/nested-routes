import { json, Outlet, useLoaderData } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';
import {
  AccountsSideBar,
  Header,
  HorizontalContainer,
  ViewVerticalContainer,
} from '~/components';
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

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst',
    description: 'Application to trade securities and manage investments',
  };
};

export default function AccountsPage() {
  const { accounts } = useLoaderData<AccountsPageData>();

  return (
    <ViewVerticalContainer>
      <Header />
      <HorizontalContainer className="min-h-0">
        <AccountsSideBar accounts={accounts} />
        <Outlet />
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
}
