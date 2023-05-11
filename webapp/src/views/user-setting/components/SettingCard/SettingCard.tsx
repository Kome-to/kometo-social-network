import classNames from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../../../components/Card/Card';
import Icon, { ICONS, IconSize } from '../../../../components/Icon/Icon';

import { routes } from '../../../../common/utils/routes';
import { storage } from '../../../../common/utils/storage';
import './SettingCard.scss';

const categories = [
  {
    header: 'General',
    options: [
      { icon: ICONS.HOME, name: 'Account Information' },
      { icon: ICONS.HOME, name: 'Saved Address' },
      { icon: ICONS.HOME, name: 'Social Account' },
    ],
  },
  {
    header: 'Account',
    options: [
      { icon: ICONS.HOME, name: 'My Cards' },
      { icon: ICONS.HOME, name: 'Password' },
    ],
  },
  {
    header: 'Other',
    options: [
      { icon: ICONS.HOME, name: 'Notification' },
      { icon: ICONS.HOME, name: 'Help' },
      { icon: ICONS.HOME, name: 'Logout' },
    ],
  },
];

const Category: React.FC<{ data: any }> = ({ data }) => {
  const history = useHistory();
  const handleClick = (name: string) => {
    if (name === 'Logout') {
      storage.removeToken({ path: '/' });
      window.location.reload();
    }

    if (name === 'Password') {
      history.push(routes.USER_SETTING_CHANGE_PASSWORD);
    }
  };
  return (
    <div className="setting-category">
      <div className="setting-category__header">{data.header}</div>
      {data.options.map((option: any, index: number) => {
        const styles = classNames('setting-category__option', {
          'setting-category__option--no-border': index === data.options.length - 1,
        });
        return (
          <div
            key={option.name}
            className={styles}
            onClick={() => {
              handleClick(option.name);
            }}
          >
            <div className="setting-category__option-content">
              <Icon name={option.icon} />
              <div>{option.name}</div>
            </div>
            <Icon name={ICONS.ANGLE_RIGHT} size={IconSize.MD} />
          </div>
        );
      })}
    </div>
  );
};

const SettingCard: React.FC = () => {
  return (
    <div className="user-setting">
      <Card className="user-setting__card">
        <div className="user-setting__header">Settings</div>
        {categories.map((category) => (
          <Category key={category.header} data={category} />
        ))}
      </Card>
    </div>
  );
};

export default SettingCard;
