import React from 'react';

import './ContentBlock.scss';

export interface Props {
  children: React.ReactNode;
}

const ContentBlockHeading: React.FunctionComponent<Props> = ({ children }) => {
  return <span className="content-block__heading">{children}</span>;
};

export default ContentBlockHeading;
