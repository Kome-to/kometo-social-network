import React from 'react';
import dayjs from 'dayjs';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { lazy } from '@loadable/component';

import store, { history, persistor } from './store';
import { authGuard, routes, unAuthGuard } from './common/utils/routes';

// Components
import NavBar from './components/Navbar/NavBar';
import PrivateRoute from './components/Route/PrivateRoute';
import LoadingView from './components/Loading/LoadingModal';
import MainPage from './components/MainPage/MainPage';

// Scenes
const LoginView = lazy(() => import('./views/login/LoginView'));
const SignUpView = lazy(() => import('./views/sign-up/SignUpView'));
const DashboardView = lazy(() => import('./views/dashboard/DashboardView'));

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
                  <MainPage>
                    <PrivateRoute exact path={routes.DEFAULT} component={DashboardView} guards={[authGuard]} />

                    <PrivateRoute exact path={routes.LOGIN} component={LoginView} guards={[unAuthGuard]} />
                    <PrivateRoute exact path={routes.SIGN_UP} component={SignUpView} guards={[unAuthGuard]} />
                  </MainPage>
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
