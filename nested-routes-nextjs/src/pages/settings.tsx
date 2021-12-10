import React, { ReactElement } from 'react';
import Link from 'next/link';
import { AuthenticatedLayout, VerticalContainer } from '../components';

export default function SettingsPage() {
  return (
    <VerticalContainer className="p-4">
      <h2>Settings</h2>
      <Link href="/accounts">
        <a className="link mt-4">Back to Accounts</a>
      </Link>
    </VerticalContainer>
  );
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};
