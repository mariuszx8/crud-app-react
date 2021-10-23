import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddCampaign from './Pages/AddCampaign/AddCampaign';
import EditCampaign from './Pages/EditCampaign';
import './Styles/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/AddCampaign' component={AddCampaign}/>
        <Route exact path='/EditCampaign' component={EditCampaign}/>
      </Switch>
    </Router>
  );
}

export default App;
