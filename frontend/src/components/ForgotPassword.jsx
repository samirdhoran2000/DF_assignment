import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("event ", e.target.value);

      const res = await fetch("http://localhost:3000/user/login", {
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

      if (result) {
        localStorage.setItem("token", result.token);
        toast("Login successful");
      }

      navigate("/about");
    } catch (error) {
      console.log("error in registration ", error);
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div className="login-main-div">
      <section
        style={{
          width: "1000px",
          margin: "auto",
        }}
      >
        <div
          className="signin"
          style={{
            width: "500px",
          }}
        >
          <div className="content">
            <div
              style={{
                color: "purple",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              Did you forgot your password?
            </div>
            <h2
              style={{
                fontSize: "12px",
              }}
            >
              Enter your email address and we&apos;ll send you a link to restore
              password
            </h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <i>Email</i>
              </div>

              <div className="inputBox">
                <input
                  type="submit"
                  value="Request Reset Link"
                  onClick={(e) => {
                    onRegister(e);
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to Log in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
