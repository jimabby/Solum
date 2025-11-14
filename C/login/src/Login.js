import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const validEmails = ["test@example.com", "user@example.com", "admin@example.com"];

  /**
   * Email Validation
   * @param {*} value 
   * @returns 
   */
  const validateEmail = (value) => {
    if (!value) return "Email cannot be empty.";

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(value)) return "Invalid email format.";

    if (!validEmails.includes(value)) return "Email does not exist.";

    return "";
  };

  /**
   * Password Validation
   * @param {*} password 
   * @returns 
   */
  const validatePassword = (password) => {
    const length = password.length >= 8 && password.length <= 16;
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const symbol = /[^A-Za-z0-9]/.test(password);

    if (!length) return "Password must be 8–16 characters.";
    if (!upper) return "Password must contain at least one uppercase letter.";
    if (!lower) return "Password must contain at least one lowercase letter.";
    if (!number) return "Password must contain at least one number.";
    if (!symbol) return "Password must contain at least one symbol.";

    return "";
  };

  /**
   * Login function
   * @param {*} e 
   * @returns 
   */
  const handleLogin = (e) => {
    e.preventDefault();
    setResetMessage("");
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passErr);

    if (emailErr || passErr) return;
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setResetMessage("");
  };

  const handleForgotPassword = () => {
    const err = validateEmail(email);
    setEmailError(err);

    if (err) {
      setResetMessage("");
      return;
    }

    setResetMessage(`Reset link sent to ${email}`);
  };

  return (
    <div style={{
      minHeight: "100vh",
      margin: 0,
      padding: "15px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
          width: "100%",
          maxWidth: "400px", 
          margin: "50px auto", 
          padding: "30px", 
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        }}>
        { loggedIn ? (
          <div>
            <h1>Welcome, {email}</h1>
            <button 
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                color: "blue",
                cursor: "pointer"
              }}
            >Log out</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
              }}
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid",
                borderRadius: "10px",
                boxSizing: "border-box",
              }}
              required  />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(validatePassword(e.target.value))
              }}
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid",
                boxSizing: "border-box",
                borderRadius: "10px"
              }}
              required  />

            {emailError && (
              <div
                style={{
                  color: "red",
                  fontSize: "14px",
                  marginTop: "-5px",
                  marginBottom: "10px",
                }}
              >
                {emailError}
              </div>
            )}

            {passwordError && (
              <div
                style={{
                  color: "red",
                  fontSize: "14px",
                  marginTop: "-5px",
                  marginBottom: "10px",
                }}
              >
                {passwordError}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                color: "blue",
                cursor: "pointer"
              }}  
            >
              Login
            </button>
            <p 
              style={{
                color: "green",
                cursor: "pointer",
                marginTop: "12px",
              }}
              onClick={handleForgotPassword}>Forgot password?</p>

            {resetMessage && (
              <div style={{ color: "green", marginTop: "10px", fontSize: "0.9rem" }}>
                {resetMessage}
              </div>
            )}

          </form>        
        )}
      </div>
    </div>
  )
}

export default Login;