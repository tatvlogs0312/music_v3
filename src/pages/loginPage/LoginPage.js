import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Notification from "../../components/notification/Notification";

const baseURL = "http://localhost:8080";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate(); 


  const login = () => {
    axios
      .post(`${baseURL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        axios
          .get(`${baseURL}/user/me`, {
            headers: {
              Authorization: res.data.accessToken,
            },
          })
          .then((res1) => {
            localStorage.setItem("me", JSON.stringify(res1.data));
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  };

  setInterval(() => {
    setErr(null);
  }, 5000);

  return (
    <div className="login-page">
      {err && <Notification msg={err} type="error" />}
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng_10/Ng%C3%A0y_20/Nga/117578B%E1%BA%A3o-v%E1%BB%87-b%E1%BA%A3n-quy%E1%BB%81n-ch%C3%ADnh-l%C3%A0-b%E1%BA%A3o-v%E1%BB%87-n%E1%BB%81n-%C3%A2m-nh%E1%BA%A1c%2C-b%E1%BA%A3o-v%E1%BB%87-ng%C6%B0%E1%BB%9Di-s%C3%A1ng-t%E1%BA%A1o-v%C3%A0-%C4%91%C6%B0a-c%C3%B4ng-nghi%E1%BB%87p-%C3%A2m-nh%E1%BA%A1c-ph%E1%BB%A7-s%C3%B3ng-kh%E1%BA%AFp-th%E1%BA%BF-gi%E1%BB%9Bi-(%E1%BA%A3nh-minh-h%E1%BB%8Da).jpg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Email
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-lg-end align-items-center">
                <Link className="text-body" to="/forgotpassword">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={login}
                >
                  Đăng nhập
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Bạn chưa có tài khoản?
                  <Link className="link-danger" to="/registration">
                    Đăng ký
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
