import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { FastField, Form, Formik } from 'formik';
import { io } from 'socket.io-client';
import { routes } from '../../common/utils/routes';
import { setSocket } from '../../services/controllers/common/CommonSlice';
import { userActions } from '../../services/controllers/user/UserActions';
import { selectCurrentUser } from '../../services/controllers/user/UserSelector';
import Icon, { ICONS } from '../Icon/Icon';
import { FormikTextInput } from '../TextInput/TextInput';
import './NavBar.scss';

const NavBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const currentUser = useSelector(selectCurrentUser) as any;
  const dispatch = useDispatch();
  const history = useHistory();

  const hiddenNavbarRouter = [routes.LOGIN, routes.SIGN_UP];

  const classes = classNames('navbar', {});

  useEffect(() => {
    if (routes.LOGIN !== pathname) {
      dispatch(userActions.getMe());
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      const socket = io('http://localhost:4044') as any;
      socket.emit('join', currentUser.id);

      dispatch(setSocket({ socket }));
      return () => socket.close();
    }
    return () => {};
  }, [currentUser]);

  return !hiddenNavbarRouter.includes(pathname) ? (
    <nav className={classes}>
      <div
        onClick={() => {
          history.push(routes.DEFAULT);
        }}
        className="navbar__logo"
      >
        <div>Kometo</div>
      </div>
      <div className="navbar__main">
        <div className="navbar__sub">
          <div className="navbar__search">
            <Formik initialValues={{ searchValue: '' }} onSubmit={() => {}} validateOnBlur validateOnChange>
              {() => (
                <Form className="login__form">
                  <FastField wrapperClass="login__input" component={FormikTextInput} name="email" placeholder="Search" />
                </Form>
              )}
            </Formik>
          </div>
          <div className="navbar__feature">
            <div
              className="navbar__icon-wrapper"
              onClick={() => {
                history.push(routes.DEFAULT);
              }}
            >
              <Icon className="navbar__icon" name={ICONS.HOME} />
            </div>
            <div className="navbar__icon-wrapper">
              <Icon className="navbar__icon" name={ICONS.STORY} />
            </div>
            <div className="navbar__icon-wrapper">
              <Icon className="navbar__icon" name={ICONS.LIVE} />
            </div>
            <div className="navbar__icon-wrapper">
              <Icon className="navbar__icon" name={ICONS.USER} />
            </div>
            <div className="navbar__icon-wrapper">
              <Icon className="navbar__icon" name={ICONS.SHOP} />
            </div>
          </div>
        </div>
        <div className="navbar__panel">
          <div className="navbar__panel-item">
            <div>
              <Icon className="navbar__icon navbar__icon--no-border" name={ICONS.NOTIFY} />
            </div>
            <div
              onClick={() => {
                history.push(routes.CHAT);
              }}
            >
              <Icon className="navbar__icon navbar__icon--no-border" name={ICONS.CHAT} />
            </div>
          </div>
          <div
            className="navbar__user"
            onClick={() => {
              history.push(routes.USER_SETTING);
            }}
          >
            {currentUser && (
              <img
                src={
                  currentUser?.avatar ||
                  'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A'
                }
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      {/* {storage.isLoggedIn ? (
        <UserDropdown />
      ) : (
        <div className="navbar__link">
          <Link to={link.to}>
            {link.title}
            <span className="navbar__link--bold">{link.path}</span>
          </Link>
        </div>
      )} */}
    </nav>
  ) : (
    <div />
  );
};

export default NavBar;
