import React, { Component } from "react";
import "../styles/Post.module.css";
import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
export default class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: "",
    };
  }
  clickMe = () => {
    console.log({
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember,
    });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };
  render() {
    return (
      <>
        <AdminLayoutHoc>
          <div style={{ margin: 100 }}>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={this.state.remember}
                  />{" "}
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.clickMe}
              >
                Submit
              </button>
            </form>
          </div>
        </AdminLayoutHoc>
      </>
    );
  }
}
