import classNames from 'classnames';
import React from 'react';
import './Frame.scss';

export interface FrameProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  borderLeft?: boolean;
  className?: string;
}

const Frame: React.FC<FrameProps> = ({ leftIcon, rightIcon, children, className, borderLeft }) => {
  const classes = classNames('frame', className, { 'frame__border-left': borderLeft });

  return (
    <div className={classes}>
      {leftIcon}
      <div className="frame__content">{children}</div>
      {rightIcon}
    </div>
  );
};

export default Frame;
