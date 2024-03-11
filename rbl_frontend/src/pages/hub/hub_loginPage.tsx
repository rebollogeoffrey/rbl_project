import CreateAccountForm from "../../components/hub/hub_formcreateaccount";
import Login from "../../components/hub/hub_formlogin";
import HubLogo from "../../components/hub/hub_logo";

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
