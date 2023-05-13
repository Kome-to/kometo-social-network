import classNames from 'classnames';
import React from 'react';

import './ContentBlock.scss';

export interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
}

const ContentBlock: React.FunctionComponent<ContentBlockProps> = ({ children, className }) => {
  const classes = classNames('content-block', className);
  return <div className={classes}>{children}</div>;
};

export default ContentBlock;
