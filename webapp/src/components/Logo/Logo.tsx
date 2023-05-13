import classNames from 'classnames';
import React from 'react';
import Icon, { ICONS } from '../Icon/Icon';

import './Logo.scss';

export enum LogoType {
  LogoMark,
  Lockup,
  LockupLight,
}

export enum LogoSize {
  SM,
  MD,
}

interface LogoProps {
  type: LogoType;
  size?: LogoSize;
}

const getLogo = (type: LogoType) => {
  switch (type) {
    case LogoType.LogoMark:
    case LogoType.Lockup:
    case LogoType.LockupLight:
    default:
      return ICONS.DASHBOARD;
  }
};

const Logo: React.FunctionComponent<LogoProps> = ({ type, size = LogoSize.MD }) => {
  const logo = getLogo(type);

  const classes = classNames('logo', {
    'logo--mark': type === LogoType.LogoMark,
    'logo--lockup': type === LogoType.Lockup || type === LogoType.LockupLight,
    'logo--md': size === LogoSize.MD,
    'logo--sm': size === LogoSize.SM,
  });

  return <Icon name={logo} className={classes} />;
};

export default Logo;
