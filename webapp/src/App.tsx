import { lazy } from '@loadable/component';
import { ConnectedRouter } from 'connected-react-router';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { io } from 'socket.io-client';

import { authGuard, routes, unAuthGuard } from './common/utils/routes';
import store, { history, persistor } from './store';

// Components
import LoadingView from './components/Loading/LoadingModal';
import NavBar from './components/Navbar/NavBar';
import PrivateRoute from './components/Route/PrivateRoute';
import { setSocket } from './services/controllers/common/CommonSlice';
import { selectCurrentUser } from './services/controllers/user/UserSelector';
import { userActions } from './services/controllers/user/UserActions';

// Scenes
const LoginView = lazy(() => import('./views/login/LoginView'));
const HomeView = lazy(() => import('./views/home/HomeView'));
const UserSettingView = lazy(() => import('./views/user-setting/UserSettingView'));
const ChangePasswordView = lazy(() => import('./views/change-password/ChangePasswordView'));
const AccountDetailView = lazy(() => import('./views/account-detail/AccountDetailView'));
const SuggestFriendView = lazy(() => import('./views/suggest-friend-view/SuggestFriendView'));
const ChatView = lazy(() => import('./views/chat/ChatView'));
const CallView = lazy(() => import('./views/call/CallView'));
const ProfileView = lazy(() => import('./views/profile/ProfileView'));

dayjs.extend(localizedFormat);

const SocketWrapper: React.FC<any> = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      const socket = io('http://localhost:4044') as any;
      socket.emit('join', currentUser.id);

      dispatch(setSocket({ socket }));
      return () => socket.close();
    }
    return () => {};
  }, [currentUser]);

  return children;
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <LoadingView />
        <React.Suspense fallback={<div />}>
          <ConnectedRouter history={history}>
            <BrowserRouter>
              <SocketWrapper>
                <div className="container">
                  <NavBar />
                  <Switch>
                    <PrivateRoute exact path={routes.DEFAULT} component={HomeView} guards={[authGuard]} />

                    <PrivateRoute exact path={routes.USER_SETTING} component={UserSettingView} guards={[authGuard]} />
                    <PrivateRoute exact path={routes.USER_SETTING_CHANGE_PASSWORD} component={ChangePasswordView} guards={[authGuard]} />
                    <PrivateRoute exact path={routes.USER_SETTING_INFO} component={AccountDetailView} guards={[authGuard]} />
                    <PrivateRoute exact path={routes.CHAT} component={ChatView} guards={[authGuard]} />
                    <PrivateRoute exact path={routes.CALL} component={CallView} guards={[authGuard]} />
                    <PrivateRoute exact path={routes.PROFILE} component={ProfileView} guards={[authGuard]} />

                    <PrivateRoute exact path={routes.SUGGEST_FRIEND} component={SuggestFriendView} guards={[authGuard]} />

                    <PrivateRoute exact path={routes.LOGIN} component={LoginView} guards={[unAuthGuard]} />
                    <PrivateRoute exact path={routes.SIGN_UP} component={LoginView} guards={[unAuthGuard]} />
                  </Switch>
                </div>
              </SocketWrapper>
            </BrowserRouter>
          </ConnectedRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
