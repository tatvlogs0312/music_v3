import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ChangepasswordPage() {
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [repairnewpassword, setRepairNewPassword] = useState("");
  return (
    <div>

      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Đổi mật khẩu</p>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="NHập mật khẩu cũ"
                  required="required"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" for="form3Example3">
                  Mật khẩu cũ
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="NHập mật khẩu mới"
                  required="required"
                  value={newpassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <label className="form-label" for="form3Example3">
                  Mật khẩu mới
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập lại mật khẩu mới"
                  required="required"
                  value={repairnewpassword}
                  onChange={(e) => setRepairNewPassword(e.target.value)}
                />
                <label className="form-label" for="form3Example3">
                  Nhập lại mật khẩu mới
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default ChangepasswordPage;
