import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mazo</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Mazo.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="" placeholder="Email" className="loginInput" />
            <input type="" placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
