import classNames from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../common/utils/routes';
import { storage } from '../../common/utils/storage';
import Button, { ButtonIconPlacement, ButtonType } from '../Button/Button';
import { ICONS, IconSize } from '../Icon/Icon';
import Logo, { LogoType } from '../Logo/Logo';
import UserDropdown from './components/UserDropdown/UserDropdown';

import './NavBar.scss';

const NavBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const history = useHistory();

  const link = useMemo(() => {
    switch (pathname) {
      case '/login':
        return { title: 'Don’t have an account yet? ', path: 'Sign up →', to: '/sign-up' };
      case '/sign-up':
        return { title: ' Already have an account? ', path: 'Log in →', to: '/login' };
      case '/request-reset-password':
        return { title: ' Go back to ', path: 'Log in →', to: '/login' };
      default:
        return { title: '', path: '', to: '/' };
    }
  }, [pathname]);

  const classes = classNames('navbar', {});

  return (
    <nav className={classes}>
      {storage.isLoggedIn ? (
        <UserDropdown />
      ) : (
        <div className="navbar__link">
          <Link to={link.to}>
            {link.title}
            <span className="navbar__link--bold">{link.path}</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
