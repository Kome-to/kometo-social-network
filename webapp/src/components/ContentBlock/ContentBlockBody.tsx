import * as React from 'react';
import classNames from 'classnames';

export interface ContentBlockBodyProps {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  dataId: string;
}

const ContentBlockBody: React.FunctionComponent<ContentBlockBodyProps> = ({ children, className, dataId }: ContentBlockBodyProps) => {
  const classes = classNames(className, 'content-block__body');
  return (
    <div className={classes} data-id={dataId}>
      {children}
    </div>
  );
};

export default ContentBlockBody;
