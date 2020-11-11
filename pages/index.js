import React, { useState } from "react";
import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";

export default function Home() {
  const [auth, setAuth] = useState({ email: "", password: "", remember: "" });

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setAuth((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const clickMe = () => {
    console.log({
      email: auth.email,
      password: auth.password,
      remember: auth.remember,
    });
  };
  return (
    <>
      <AdminLayoutHoc>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              value={auth.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              value={auth.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                value={auth.remember}
              />{" "}
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={clickMe}
          >
            Submit
          </button>
        </form>
      </AdminLayoutHoc>
    </>
  );
}
