import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Spacestagram from './Spacestagram'
import UserProfile from './UserProfile';


export default function Routes(props) {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Spacestagram} />
          <Route exact path='/userprofile' component={UserProfile}/>
        </Switch>
      </div>
    );
  }