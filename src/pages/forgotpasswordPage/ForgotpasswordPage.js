import React from "react";
import { useState } from "react";
import "./Forgotpassword.css";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div class="forgotpasswordPage">
      <div class="card text-center">
        <div class="card-header h5 text-white bg-primary">Password Reset</div>
        <div class="card-body px-5">
          <form action="" method="post">
            <p class="card-text py-2">
              Enter your email address and we will send you an email with
              instructions to reset your password.
            </p>
            <div class="form-outline">
              <input
                type="email"
                id="typeEmail"
                class="form-control my-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label class="form-label" for="typeEmail">
                Email input
              </label>
            </div>
            <button class="btn btn-primary w-100" type="submit">
              Reset password
            </button>
            <div class="d-flex justify-content-between mt-4">
                <Link className="text-body" to="/login">
                    Login
                </Link>
                <Link className="text-body" to="/registration">
                    Register
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
