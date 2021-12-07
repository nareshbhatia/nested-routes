import { Link } from 'react-router-dom';
import { VerticalContainer } from '../../../components';

export function SettingsView() {
  return (
    <VerticalContainer className="p-4">
      <h2>Settings</h2>
      <Link className="link mt-4" to="/accounts">
        Back to Accounts
      </Link>
    </VerticalContainer>
  );
}
