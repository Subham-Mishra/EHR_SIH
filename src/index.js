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
          <div
            className="row text-center my-5 "
            style={{ paddingBottom: "1%" }}
          >
            <div className="col-md-4">
              <Link to="/doctor">
                <button type="button" className="btn btn-success">
                  DOCTOR PROFILE
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/patient">
                <button type="button" className="btn btn-success">
                  PATIENT
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/technician">
                <button type="button" className="btn btn-success">
                  LAB PROFILE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="row text-center my-5 "
            style={{ paddingBottom: "10%" }}
          >
            <div className="col-md-4">
              <Link to="/superadmin">
                <button type="button" className="btn btn-success">
                  SUPERADMIN
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/admin">
                <button type="button" className="btn btn-success">
                  ADMIN
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/reception/addpatient">
                <button type="button" className="btn btn-success">
                  RECEPTIONIST
                </button>
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
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="row">
          <div className="col-md-3 wrapper">
            <div id="formContent" style={{ padding: "5%" }}>
              <h3>DOCTOR'S LOGIN:</h3>
              <hr />
              <div>
                <button className="btn btn-success btn-sm">
                  UPLOAD REPORT FILE
                </button>
                <br />
                <br />
                <input
                  className="form-control"
                  placeholder="Patient's Public Address"
                />
                <br />
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <br />
                <br />
                <p className="text-center">OR</p>
                <button className="btn btn-success">Scan QR CODE</button>
              </div>
            </div>
          </div>

          <div className="col-md-7 ml-auto mr-5 wrapper">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>Patient Name</th>
                  <th>Patient Address</th>
                  <th>Timestamp</th>
                  <th>IPFS link </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
              </tbody>
            </table>
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
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container">
          <br />
          <br />
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>Records</th>
                <th>Address</th>
                <th>Name</th>
                <th>Role</th>
                <th>Timestamp</th>
                <th>Revoke</th>
                <th>Permit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>x0jdnac16</td>
                <td>2uy1cz</td>
                <td>Voldemort</td>
                <td>Patient</td>
                <td>02:06</td>
                <td>
                  <Link to="/revoke">
                    <button type="button" class="btn btn-danger btn-sm">
                      REVOKE
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to="/permit">
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-toggle="modal"
                      data-target="#permitModal"
                    >
                      PERMIT
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export class revoke extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className=" container" style={{ padding: "12%" }}>
          <button className="btn btn-success btn-sm">UPLOAD REPORT FILE</button>
          <br />
          <br />
          <input className="form-control" placeholder="Enter Address" />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
          <br />
          <p className="text-center">OR</p>
          <button className="btn btn-success btn-block">Scan QR CODE</button>
        </div>
      </div>
    );
  }
}

export class permit extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <button className="btn btn-success btn-sm">UPLOAD REPORT FILE</button>
          <br />
          <br />
          <input className="form-control" placeholder="Enter Address" />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
          <br />
          <p className="text-center">OR</p>
          <button className="btn btn-success btn-block">Scan QR CODE</button>
        </div>
      </div>
    );
  }
}

export class loginTechnician extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="row">
          <div className="col-md-4 wrapper ">
            <div id="formContent" style={{ padding: "5%" }}>
              <h3>TECNICIAN'S LOGIN:</h3>
              <hr />
              <div>
                <button className="btn btn-success btn-sm">
                  UPLOAD REPORT FILE
                </button>
                <br />
                <br />
                <input
                  className="form-control"
                  placeholder="Patient's Public Address"
                />
                <br />
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <br />
                <br />
                <p className="text-center">OR</p>
                <button className="btn btn-success">Scan QR CODE</button>
              </div>
            </div>
          </div>

          <div className="col-md-7 ml-auto mr-5 wrapper">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>Patient Name</th>
                  <th>Patient Address</th>
                  <th>Timestamp</th>
                  <th>IPFS link </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
                <tr>
                  <td>Bilbo Baggins</td>
                  <td>2uy1cz</td>
                  <td>02:06</td>
                  <td>4JWKXl5YYOTxifB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export class superAdmin extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <h3 className="text-center">Add an Admin</h3>
          <br />
          <input className="form-control" placeholder="Enter PUBLIC ADDRESS" />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
          <p className="text-center">OR</p>
          <br />
          <button className="btn btn-success btn-block">SCAN QR CODE</button>
        </div>
      </div>
    );
  }
}

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <Link to="/admin/addDoctor">
            <button className="btn btn-success mx-5">ADD A DOCTOR</button>
          </Link>
          <Link to="/admin/addLab">
            <button className="btn btn-success mx-5">
              ADD A LAB TECHICIAN
            </button>
          </Link>
          <Link to="/admin/addReception">
            <button className="btn btn-success mx-5">ADD A RECEPTIONIST</button>
          </Link>
        </div>
      </div>
    );
  }
}

export class addDoctor extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <h3 className="text-center">Add a DOCTOR</h3>
          <br />
          <input className="form-control" placeholder="Enter Name..." />
          <br />
          <input className="form-control" placeholder="Enter PUBLIC ADDRESS" />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
          <p className="text-center">OR</p>
          <br />
          <button className="btn btn-success btn-block">SCAN QR CODE</button>
        </div>
      </div>
    );
  }
}

export class addLab extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <h3 className="text-center">Add a LAB TECHICIAN</h3>
          <br />
          <input className="form-control" placeholder="Enter Name..." />
          <br />
          <input
            className="form-control"
            placeholder="Enter Public address..."
          />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
        </div>
      </div>
    );
  }
}

export class addReception extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <h3 className="text-center">Add a RECEPTIONIST</h3>
          <br />
          <input className="form-control" placeholder="Enter Name..." />
          <br />
          <input
            className="form-control"
            placeholder="Enter Public address..."
          />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
        </div>
      </div>
    );
  }
}

export class addPatient extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
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
        <div className="container" style={{ padding: "12%" }}>
          <h3 className="text-center">Add a PATIENT</h3>
          <br />
          <input className="form-control" placeholder="Enter Patient's Name" />
          <br />
          <input className="form-control" placeholder="Enter  Public Address" />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <br />
          <p className="text-center">OR</p>
          <br />
          <button className="btn btn-success btn-block">SCAN QR CODE</button>
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
      <Route exact path="/revoke" component={revoke} />
      <Route exact path="/permit" component={permit} />
      <Route exact path="/technician" component={loginTechnician} />
      <Route exact path="/superadmin" component={superAdmin} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/adddoctor" component={addDoctor} />
      <Route exact path="/admin/addlab" component={addLab} />
      <Route exact path="/admin/addreception" component={addReception} />
      <Route exact path="/reception/addpatient" component={addPatient} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
