import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("event ", e.target.value);

      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await res.json();
      console.log(result);

      if (result?.data) {
        navigate("/");
        toast("registration successful, please login to continue...");
      } else {
        toast("failed to create user!");
      }
    } catch (error) {
      console.log("error in registration ", error);
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div className="login-main-div">
      <section>
        <div className="signin">
          <div className="content">
            <img src="DF_logo-transparent2.png" alt="DF_logo_transparent2" />
            <h2>Welcome to Digitalflake Admin</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />{" "}
                <i>Password</i>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  value="Register"
                  onClick={(e) => {
                    onRegister(e);
                  }}
                />
              </div>
              <div>
                <p>
                  Already have an account{" "}
                  <a
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Register;
