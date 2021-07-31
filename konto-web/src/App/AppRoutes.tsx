import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>加载中...</div>}>
    <Switch>
      <Route path="/account" component={lazy(() => import('./Pages/Account/Account'))}></Route>
      <Redirect from="/" to="/account" />
    </Switch>
  </Suspense>
);
