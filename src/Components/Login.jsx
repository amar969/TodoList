import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import {useDispatch, useSelector} from "react-redux"
import { login } from "../Redux/action.js";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch(); 
  const {user} = useSelector((state) => state)
  console.log(user)

  let navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const getLogin = async () => {
    if (email && password) {
      const payload = {
        email: email,
        password: password,
      };

      try {
        let res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await res.json();
        if (data.token != null) {
          navigate("./Home");
          localStorage.setItem("user", JSON.stringify(data.token));
        }
        console.log(data);
        dispatch(login(data.token))
       
      } catch (error) {
        console.log(error);
      }
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    getLogin();
  };

  React.useEffect(() => {
    getLogin();
  }, []);

  return (
    <>
      <div className="login">
        <form  className="login__form" onSubmit={handleSubmit}>
          <h1>Login Here 🚪 </h1>

          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
          />

          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your Password"
          />

          <button className="submit__btn">Login</button>
        </form>
      </div>
    </>
  );
};
