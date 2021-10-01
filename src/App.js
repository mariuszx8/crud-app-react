import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HashRouter} from 'react-router-dom'
import Home from './pages/Home';
import AddCampaign from './pages/AddCampaign';
import EditCampaign from './pages/EditCampaign';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  exact path='/AddCampaign' component={AddCampaign}/>
          <Route  exact path='/EditCampaign' component={EditCampaign}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
