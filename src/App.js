import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import React from "react";
import Safes from './pages/Safes/Safes';
import IAMServiceAccounts from './pages/iamServiceaccounts/IAMServiceAccounts';
import ServiceAccounts from './pages/serviceAccounts/ServiceAccounts';
import VaultAppsRoles from './pages/vaultApps/VaultAppsRoles';
import Azure from './pages/azureActiveDirectory/AzureActiveDirectory';
import MainNavigation from './components/layout/MainNavigation';

function App() {

  return (
    <>
      <Router>
      <MainNavigation />
      <Switch>
      <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/safes" />;
            }}
          />
      <Route path="/safes" exact component={Safes} />
      <Route path="/azure" exact component={Azure} />
      <Route path="/iamsvc" exact component={IAMServiceAccounts}/>
      <Route path="/svcaccount" exact component={ServiceAccounts}/>
      <Route path="/vault" exact component = {VaultAppsRoles}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
