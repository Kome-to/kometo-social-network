import { lazy } from '@loadable/component';
import { ConnectedRouter } from 'connected-react-router';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { authGuard, routes, unAuthGuard } from './common/utils/routes';
import store, { history, persistor } from './store';

// Components
import LoadingView from './components/Loading/LoadingModal';
import NavBar from './components/Navbar/NavBar';
import PrivateRoute from './components/Route/PrivateRoute';

// Scenes
const LoginView = lazy(() => import('./views/login/LoginView'));
const HomeView = lazy(() => import('./views/home/HomeView'));

dayjs.extend(localizedFormat);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <LoadingView />
        <React.Suspense fallback={<div />}>
          <ConnectedRouter history={history}>
            <BrowserRouter>
              <div className="container">
                <NavBar />
                <Switch>
                  <PrivateRoute exact path={routes.DEFAULT} component={HomeView} guards={[authGuard]} />

                  <PrivateRoute exact path={routes.LOGIN} component={LoginView} guards={[unAuthGuard]} />
                  <PrivateRoute exact path={routes.SIGN_UP} component={LoginView} guards={[unAuthGuard]} />
                </Switch>
              </div>
            </BrowserRouter>
          </ConnectedRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
