import React, { useEffect } from "react";
import { useState } from "react";
import "./Forgotpassword.css";
import { Link } from "react-router-dom";
import Notification from "../../components/notification/Notification";
import axios from "axios";

const baseURL = "http://localhost:8080";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [disabled, setDisable] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof email === "string" && email.trim().length !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email]);

  const sendMail = () => {
    axios
      .put(`${baseURL}/user/forgot-password`, {
        email: email,
      })
      .then((res) => {
        setStatus({
          msg: "Thành công, vui lòng kiểm tra hộp thư của bạn",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        setStatus({
          msg: err.response.data.msg,
          type: "error",
        });
      });

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <div className="forgotpasswordPage">
      {status && <Notification msg={status.msg} type={status.type} />}
      <div className="card text-center">
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we will send you an email with
            instructions to reset your password.
          </p>
          <div className="form-outline">
            <input
              id="typeEmail"
              className="form-control my-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" for="typeEmail">
              Email input
            </label>
          </div>
          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={disabled}
            onClick={sendMail}
          >
            Reset password
          </button>
          <div className="d-flex justify-content-between mt-4">
            <Link className="text-body" to="/login">
              Login
            </Link>
            <Link className="text-body" to="/registration">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
