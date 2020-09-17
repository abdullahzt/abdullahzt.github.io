import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Skills from './containers/Skills/Skills';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </Layout>
  );
}

export default App;
