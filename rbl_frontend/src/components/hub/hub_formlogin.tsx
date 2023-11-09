import "../../styles/hub/hub_form.css";

function Login() {
  return (
    <div className="container-login">
      <h1> Login </h1>
      <form className="form-login">
        <label>Email</label>
        <input
          type="text"
          id="email-login"
          name="Email"
          placeholder="Your email"
        />
        <label>Password</label>
        <input
          type="password"
          id="password-login"
          name="password"
          placeholder="Your password"
        />

        <input id="signin-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Login;
