import CreateAccountForm from "../../components/hub/formcreateaccount";
import Login from "../../components/hub/formlogin";
import Logo from "../../components/hub/logo";

function LoginPage() {
  return (
    <>
      <Logo />
      <main>
        <Login />
        <CreateAccountForm />
      </main>
    </>
  );
}

export default LoginPage;
