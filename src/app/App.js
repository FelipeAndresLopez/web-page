import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from '@patterns/pages/Home/Home.jsx';
import Skills from '@patterns/pages/Skills/Skills.jsx';
import Experience from '@patterns/pages/Experience/Experience.jsx';
import Education from '@patterns/pages/Education/Education.jsx';
import Portfolio from '@patterns/pages/Portfolio/Portfolio.jsx';
import ProjectDetails from '@patterns/pages/Portfolio/ProjectDetails.jsx';
import Blog from '@patterns/pages/Blog/Blog.jsx';
import NotFound from '@patterns/pages/NotFound/NotFound.jsx';
import Layout from '@patterns/templates/Layout';

import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
  const initialState = useInitialState();

  useEffect(() => {
    ReactGA.initialize('UA-172560430-1');

    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.seacrch);
  }, []);

  return (
    <AppContext.Provider value={initialState}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route
              path="/portfolio/:projectId"
              component={ProjectDetails}
            />
            <Route exact path="/blog" component={Blog} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
