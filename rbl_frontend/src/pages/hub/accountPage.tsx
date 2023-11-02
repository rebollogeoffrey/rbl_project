import ModifyAccountForm from "../../components/hub/formmodifyaccount";
import HubLogo from "../../components/hub/hublogo";

function AccountPage() {
  return (
    <div className="font-family-hub">
      <HubLogo />
      <main>
        <ModifyAccountForm />
      </main>
    </div>
  );
}

export default AccountPage;
