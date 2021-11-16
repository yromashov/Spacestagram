import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Spacestagram from './Spacestagram'


export default function Routes(props) {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Spacestagram} />
          {/* <Route exact path="/admin" component={AllUsersData} /> */}
        </Switch>
      </div>
    );
  }