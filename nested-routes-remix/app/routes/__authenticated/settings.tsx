import { Link } from 'remix';
import { VerticalContainer } from '~/components';

export default function SettingsView() {
  return (
    <VerticalContainer className="p-4">
      <h1>Settings</h1>
      <Link to="/accounts">Back to Accounts</Link>
    </VerticalContainer>
  );
}
