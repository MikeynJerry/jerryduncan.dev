import React, { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import NotFoundRoute from './NotFound'

const Routes: ReactElement = (
  <CoreLayout>
    <Switch>
      <Route exact path={Home.path} component={Home.component} />
      <Route component={NotFoundRoute.component} />
    </Switch>
  </CoreLayout>
)

export default Routes