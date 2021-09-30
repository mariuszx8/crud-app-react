import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HashRouter} from 'react-router-dom'
import Home from './pages/Home';
import AddCampaign from './pages/AddCampaign';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  exact path='/AddCampaign' component={AddCampaign}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
