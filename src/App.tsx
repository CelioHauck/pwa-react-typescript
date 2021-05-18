import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Geolocalization = lazy(() => import("./Geolocalization"));
const Camera = lazy(() => import("./CameraTeste"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/geolocalization">Geo</Link>
          </li>
          <li>
            <Link to="/Camera">Camera</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Camera">
          <Camera />
        </Route>
        <Route path="/geolocalization">
          <Geolocalization />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
