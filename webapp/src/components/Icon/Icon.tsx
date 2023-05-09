import * as React from 'react';
import classNames from 'classnames';

import Dashboard from './icons/dashboard.svg';
import Close from './icons/close.svg';
import Check from './icons/check.svg';

import './Icon.scss';

export const ICONS = {
  DASHBOARD: Dashboard.id,
  CLOSE: Close.id,
  CHECK: Check.id,
};

export interface IconProps {
  /**
   * Use ICONS constant in Icon.tsx
   */
  name: any;
  className?: string;
  size?: IconSize;
  rotation?: number;
}

export enum IconSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

const Icon: React.FC<IconProps> = ({ className, rotation, size = IconSize.SM, name }) => {
  const classes = classNames(
    'icon',
    className,
    {
      'icon--xs': size === IconSize.XS,
      'icon--sm': size === IconSize.SM,
      'icon--md': size === IconSize.MD,
      'icon--lg': size === IconSize.LG,
    },
    rotation ? `icon--rotate-${rotation}` : '',
  );

  return (
    <svg className={classes}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
