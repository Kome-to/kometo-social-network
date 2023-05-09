import * as React from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import { RouteGuard } from '../../common/utils/routes';

interface PrivateRouteProps extends RouteProps {
  guards: RouteGuard[];
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component, guards, ...rest }: any) => {
  const location = useLocation();
  /*
   * Decide what to render into the route
   */
  const getRenderer = (guards: RouteGuard[], Component: any, props: any) => {
    /* eslint-disable no-restricted-syntax */
    for (const guard of guards) {
      if (!guard.requestDone) {
        // if guard request isn't done then render nothing and wait for requestDone to change
        return null;
      }
      if (guard.failCondition) {
        // if guard request is done then check if failCondition matches
        // and if it does then either redirect to onFail or display nothing
        if (guard.onFail) {
          if (typeof guard.onFail === 'string') {
            return <Redirect to={guard.onFail} />;
          }
          (guard as any).onFail();
          return null;
        }
        return null;
      }
    }

    return <Component {...props} />;
  };

  return <Route {...rest} component={(props: any) => getRenderer(guards, component, props)} />;
};

export default PrivateRoute;
