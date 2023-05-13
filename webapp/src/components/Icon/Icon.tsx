import * as React from 'react';
import classNames from 'classnames';

import Dashboard from './icons/dashboard.svg';
import Close from './icons/close.svg';
import Check from './icons/check.svg';
import Home from './icons/home.svg';
import Story from './icons/story.svg';
import Live from './icons/live.svg';
import Shop from './icons/shop.svg';
import User from './icons/user.svg';
import Chat from './icons/chat.svg';
import Notify from './icons/notify.svg';
import CreatePost from './icons/create-post.svg';
import Photo from './icons/photo.svg';
import LeftArrow from './icons/left-arrow.svg';
import AngleRight from './icons/angle-right.svg';
import Comment from './icons/comment.svg';
import Like from './icons/like.svg';
import Share from './icons/share.svg';
import Option from './icons/option.svg';

import './Icon.scss';

export const ICONS = {
  DASHBOARD: Dashboard.id,
  CLOSE: Close.id,
  CHECK: Check.id,
  HOME: Home.id,
  STORY: Story.id,
  LIVE: Live.id,
  SHOP: Shop.id,
  USER: User.id,
  NOTIFY: Notify.id,
  CHAT: Chat.id,
  CREATE_POST: CreatePost.id,
  PHOTO: Photo.id,
  LEFT_ARROW: LeftArrow.id,
  ANGLE_RIGHT: AngleRight.id,
  COMMENT: Comment.id,
  LIKE: Like.id,
  SHARE: Share.id,
  OPTION: Option.id,
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
