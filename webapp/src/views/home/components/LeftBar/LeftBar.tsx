import React from 'react';
import Card from '../../../../components/Card/Card';

import './LeftBar.scss';
import Icon, { ICONS } from '../../../../components/Icon/Icon';

const LeftBar: React.FC = () => {
  const newsFeeds = [
    { name: 'News feed' },
    { name: 'Badges' },
    { name: 'Explore Stories' },
    { name: 'Groups' },
    { name: 'Author Profile' },
  ];
  const morePages = [{ name: 'Email Box' }, { name: 'Near Hotel' }, { name: 'Latest Event' }, { name: 'Live Stream' }];
  const account = [{ name: 'Settings' }, { name: 'Badges' }, { name: 'Analytics' }, { name: 'Chat' }];

  return (
    <div className="left-bar">
      <Card className="left-bar__card">
        <div className="left-bar__card-title">New Feeds</div>
        {newsFeeds.map((newItem) => {
          return (
            <div className="left-bar__card-item" key={newItem.name}>
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
        {morePages.map((morePage) => {
          return (
            <div className="left-bar__card-item" key={morePage.name}>
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
        {account.map((accountItem) => {
          return (
            <div className="left-bar__card-item" key={accountItem.name}>
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
