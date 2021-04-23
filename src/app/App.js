import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
// import ProjectDetails from '../pages/ProjectDetails';

import Home from '@patterns/pages/Home';
// import Skills from '@patterns/pages/Skills';
// import Experience from '@patterns/pages/Experience';
// import Education from '@patterns/pages/Education/Education';
// import Portfolio from '@patterns/pages/Portfolio';
// import Blog from '@patterns/pages/Blog';
import Layout from '@patterns/templates/Layout';
// import NotFound from './NotFound';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-172560430-1');

    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/home" component={Home} />
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
          <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
