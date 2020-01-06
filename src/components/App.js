import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "../pages/ProjectDetails";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/portfolio/:projectId"
            component={ProjectDetails}
          />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
