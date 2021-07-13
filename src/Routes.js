import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeLogin from "./components/Home&Login/Home&Login";
import PlayListBlank from "./components/PlayListCreator/PlayListBlank";
import PlayListCreator from "./components/PlayListCreator/PlayListCreator";
import NoLogin from "./components/PlayListNoLogin/PlayListNoLogin";
import { ProtectedRoute } from "./components/protectroutes/protected.route";



const Routes = () => {
  return (
  <Switch>
          
    <Route exact path='/' component={HomeLogin} />

    <Route path='/error' component={NoLogin} />

    <ProtectedRoute path='/PlayListBlank' component={PlayListBlank} />

    <ProtectedRoute path='/PlayList' component={PlayListCreator} />
    



  </Switch>
  )
}

export default Routes; 

