import classNames from 'classnames';
import React from 'react';
import avatar from '../../common/assets/images/avatar.png';

import './Avatar.scss';

export enum AvatarSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

export interface AvatarProps {
  src?: string;
  size?: AvatarSize;
  className?: string;
  rounded?: boolean;
  border?: boolean;
}
const Avatar: React.FC<AvatarProps> = ({ src, size, className, border = true, rounded }) => {
  const classes = classNames(
    'avatar',
    className,
    {
      'avatar--xs': size === AvatarSize.XS,
      'avatar--sm': size === AvatarSize.SM,
      'avatar--md': size === AvatarSize.MD,
      'avatar--lg': size === AvatarSize.LG,
    },
    { 'avatar--rounded': rounded },
    { 'avatar--border': border },
  );

  return <img className={classes} src={src || avatar} alt="Avatar" />;
};

export default Avatar;
