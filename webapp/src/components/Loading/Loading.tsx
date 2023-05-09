import classNames from 'classnames';
import React from 'react';
import './Loading.scss';

export interface LoadingProps {
  className?: string;
  size?: LoadingType;
}

export type LoadingType = 'xs' | 'md';

const Loading: React.FunctionComponent<LoadingProps> = ({ className, size = 'xs' }) => {
  const classes = classNames('loading-spinner', className);
  const spinnerClasses = classNames('loading-spinner__content__spinner', {
    'loading-spinner__content__spinner--xs': size === 'xs',
    'loading-spinner__content__spinner--md': size === 'md',
  });

  return (
    <div className={classes}>
      <div className="loading-spinner__content">
        <div className={spinnerClasses} />
      </div>
    </div>
  );
};

export default Loading;
