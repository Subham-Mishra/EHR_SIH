import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class application extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="=container-fluid bg-light text-dark">
          <nav className="navbar navbar-expand-sm bg-success navbar-light">
            <div
              className="nav-item active"
              style={{ color: "black", fontWeight: "bolder" }}
            >
              SIH_2020
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" style={{ color: "white !important" }}>
                    HOME
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <header className="text-center" style={{ padding: "5%" }}>
              <h1 className="text-success">ELECTRONIC HEALTH RECORD</h1>
              <h4>A blockchain based decentralised healthcare application</h4>
            </header>
            <br />
            <hr className="line" />
            <br />
            <br />
            <br />
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <h3 className="text-center">ARE YOU A :</h3>
            </div>
            <div className="col-md-2">
              <Link to="/doctor">
                <button type="button" className="btn btn-success">
                  DOCTOR
                </button>
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/patient">
                <button type="button" className="btn btn-success">
                  PATIENT
                </button>
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/technician">
                <button type="button" className="btn btn-success">
                  LAB TECHNICIAN
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default application;

export class loginDoctor extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-light">
          <div
            className="nav-item active"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            SIH_2020
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">
                  <div style={{ color: "white" }}>HOME</div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h3 style={{ padding: "5%" }}>DOCTOR'S LOGIN:</h3>
            <div className="fadeIn"></div>
            <form>
              <input
                type="text"
                id="login"
                className="fadeIn"
                name="login"
                placeholder="ADDRESS"
              />
              <input type="submit" className="fadeIn" defaultValue="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Credentials?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class loginPatient extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-light">
          <div
            className="nav-item active"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            SIH_2020
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">
                  <div style={{ color: "white" }}>HOME</div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h3 style={{ padding: "5%" }}>PATIENT'S LOGIN:</h3>
            <div className="fadeIn"></div>
            <form>
              <input
                type="text"
                id="login"
                className="fadeIn"
                name="login"
                placeholder="ADDRESS"
              />
              <input type="submit" className="fadeIn" defaultValue="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Credentials?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class loginTechnician extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-light">
          <div
            className="nav-item active"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            SIH_2020
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">
                  <div style={{ color: "white" }}>HOME</div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h3 style={{ padding: "5%" }}>TECHNICIAN'S LOGIN:</h3>
            <div className="fadeIn"></div>
            <form>
              <input
                type="text"
                id="login"
                className="fadeIn"
                name="login"
                placeholder="ADDRESS"
              />
              <input type="submit" className="fadeIn" defaultValue="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Credentials?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={application} />
      <Route exact path="/doctor" component={loginDoctor} />
      <Route exact path="/patient" component={loginPatient} />
      <Route exact path="/technician" component={loginTechnician} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
