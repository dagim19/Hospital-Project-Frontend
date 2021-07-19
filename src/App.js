import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homePage.js";
import Patients from "./pages/patients/patients";
// import Staff from "./pages/staff/staff";
import Error from "./error";
import Header from "./pages/homepage/header";
import Form from "./pages/login/form";
import SinglePatient from "./pages/patients/singlePatient";
// import List from "./src/components/List"
import "./styles/app.css";

function App() {
  return (
    <Router className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/patients" component={Patients} />
        <Route exact path="/patients/register" component={Form} />
        <Route exact path="/patients/:id">
          <SinglePatient />
        </Route>
        {/* <Route path="/Doctors">
          <List route="/doctors" />
        </Route> */}
        {/* <Route path="/Staff" component={Staff} /> */}
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
