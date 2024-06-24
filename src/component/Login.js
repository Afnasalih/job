import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BG from "../asset/bg.jpg";
import BG2 from "../asset/view.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onLogin(user);
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="mainh1">
      <div className="middleh1">
        <img src={BG} alt="bg" className="imgh1" />
        <div className="toph1">
          <div className="lefth1">
            <img alt="view" className="workh1" src={BG2} />
          </div>
          <div className="righth1">
            <div className="midh1">
             
                <div className="mid2h1">
                <form className="formh1" onSubmit={handleLogin}>
                  <div className="txt1h1">Login</div>
                  <div className="box1h1">
                    <div className="emailh1">Email Address</div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="inputh1"
                    />
                  </div>
                  <div className="box1h1">
                    <div className="emailh1">Password</div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="inputh1"
                    />
                  </div>
                  <div className="txt2h1">Forgot password?</div>
                  <div className="box3h1">
                    <button type="submit" className="btnh1">
                      LOGIN
                    </button>
                  </div>
                  <div className="txt3h1">
                    Don't have an Account? <a href="/signup">Sign up</a>{" "}
                  </div>
                  </form>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
