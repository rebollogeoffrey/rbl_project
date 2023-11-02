import CreateAccountForm from "../../components/hub/formcreateaccount";
import Login from "../../components/hub/formlogin";
import HubLogo from "../../components/hub/hublogo";

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
