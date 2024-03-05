import CreateAccountForm from "../../components/tgpq/hub/hub_formcreateaccount";
import Login from "../../components/tgpq/hub/hub_formlogin";
import HubLogo from "../../components/tgpq/hub/hub_logo";

function LoginPage() {
  return (
    <div className="font-family-hub">
      <HubLogo />
      <main>
        <Login />
        <CreateAccountForm />
      </main>
    </div>
  );
}

export default LoginPage;
