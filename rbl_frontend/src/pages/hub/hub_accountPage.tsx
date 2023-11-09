import ModifyAccountForm from "../../components/hub/hub_formmodifyaccount";
import HubLogo from "../../components/hub/hub_logo";

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
