import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Dashboard from "./components/ComponentDahsboardPage";
import Create from './components/Create'
import Edit from './components/Edit'
import Help from './components/Help'
import Error from './components/Error'
// import PortfolioRoutes from './components/routers/PortfolioRoutes'
// import ReduxFun from './components/Redux-101'

import getVisibleExpenses from './selectors/Selector'
import Info from './components/HOC'

function App() {
  const routes = (
      <Layout>
        <Header />
        <Switch>
          <Route path='/' component={Dashboard} exact={true} />
          <Route path='/create' component={Create} exact={true} />
          <Route path='/edit/:id' component={Edit} exact={true} />
          <Route path='/Help' component={Help} exact={true} />
          <Route component={Error} />
        </Switch>
      </Layout>
  )
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
