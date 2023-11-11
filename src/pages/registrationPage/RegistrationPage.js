import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPage() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration-page">
    <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        required="required"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1c">
                        First Name
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        required="required"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1c">
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" for="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        required="required"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" for="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                        required="required"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" for="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                      required="required"
                    />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://ipc.net.vn/wp-content/uploads/2018/05/1234567890.gif"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <Link className="link-danger" to="/login">Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default RegistrationPage;
