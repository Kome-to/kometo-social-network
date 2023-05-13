import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import avatar from '../../../../common/assets/images/avatar.png';
import { storage } from '../../../../common/utils/storage';

import './UserDropdown.scss';

const UserDropdown = (): React.ReactElement => {
  const history = useHistory();

  const onLogout = (e: any) => {
    e.preventDefault();
    storage.removeToken();
    window.location.reload();
  };
  return (
    <div className="user-dropdown">
      <div className="user-dropdown__wrapper">
        <img className="user-dropdown__img" src={avatar} alt="Avatar" />
        <div className="user-dropdown__content">
          <Link to="/" className="user-dropdown__email user-dropdown__link">
            email@address.com
          </Link>
          <Link className="user-dropdown__link" to="/setting">
            My Account
          </Link>
          <Link className="user-dropdown__link" to="/billing">
            Plans & Billing
          </Link>
          <Link className="user-dropdown__link" to="/" onClick={onLogout}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
