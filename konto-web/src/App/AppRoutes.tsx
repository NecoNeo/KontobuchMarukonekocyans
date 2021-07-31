import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>加载中...</div>}>
    <Switch>
      <Route path="/user" component={lazy(() => import('./Pages/User/User'))}></Route>
      <Redirect from="/" to="/user" />
    </Switch>
  </Suspense>
);
