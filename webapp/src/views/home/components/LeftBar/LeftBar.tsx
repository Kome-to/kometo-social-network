import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { routes } from '../../../../common/utils/routes';
import Card from '../../../../components/Card/Card';
import Icon, { ICONS } from '../../../../components/Icon/Icon';
import { selectCurrentUser } from '../../../../services/controllers/user/UserSelector';
import './LeftBar.scss';

const LeftBar: React.FC = () => {
  const newsFeeds = [{ name: 'News feed' }, { name: 'Explore Stories' }, { name: 'Groups' }, { name: 'My Profile' }];
  const morePages = [{ name: 'Email Box' }, { name: 'Near Hotel' }, { name: 'Latest Event' }, { name: 'Live Stream' }];
  const account = [{ name: 'Settings' }, { name: 'Activity' }, { name: 'Chat' }];
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);

  const handleClick = (name: string) => {
    if (name === 'News feed') {
      history.push(routes.DEFAULT);
    }

    if (name === 'My Profile') {
      history.push(generatePath(routes.PROFILE, { id: currentUser.id }));
    }
  };

  return (
    <div className="left-bar">
      <Card className="left-bar__card">
        <div className="left-bar__card-title">New Feeds</div>
        {newsFeeds.map((newItem, i) => {
          const key = `${newItem.name}${i}`;
          return (
            <div
              onClick={() => {
                handleClick(newItem.name);
              }}
              className="left-bar__card-item"
              key={key}
            >
              <div>
                <Icon className="navbar__icon navbar__icon--no-border" name={ICONS.HOME} />
              </div>
              <div>{newItem.name}</div>
            </div>
          );
        })}
      </Card>
      <Card className="left-bar__card">
        <div className="left-bar__card-title">More Pages</div>
        {morePages.map((morePage, i) => {
          const key = `${morePage.name}${i}`;
          return (
            <div className="left-bar__card-item" key={key}>
              <div>
                <Icon className="navbar__icon navbar__icon--no-border" name={ICONS.HOME} />
              </div>
              <div>{morePage.name}</div>
              {morePage.name === 'Email Box' && <div className="left-bar__count">99</div>}
            </div>
          );
        })}
      </Card>
      <Card className="left-bar__card">
        <div className="left-bar__card-title">Account</div>
        {account.map((accountItem, i) => {
          const key = `${accountItem.name}${i}`;
          return (
            <div className="left-bar__card-item" key={key}>
              <div>
                <Icon className="navbar__icon navbar__icon--no-border" name={ICONS.HOME} />
              </div>
              <div>{accountItem.name}</div>
              {accountItem.name === 'Chat' && <div className="left-bar__count">999</div>}
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default LeftBar;
