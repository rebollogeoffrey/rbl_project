import ModifyAccountForm from "../../components/tgpq/hub/hub_formmodifyaccount";
import HubLogo from "../../components/tgpq/hub/hub_logo";

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
