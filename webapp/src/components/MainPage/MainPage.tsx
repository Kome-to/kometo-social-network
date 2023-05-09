import classNames from 'classnames';
import * as React from 'react';

import './MainPage.scss';

export interface MainPageProps {
  className?: string;
  children?: React.ReactNode;
}

const MainPage: React.FunctionComponent<MainPageProps> = ({ children, className }: MainPageProps) => {
  const classes = classNames('main-page', className);
  return (
    <main className={classes}>
      <section className="main-page__content">{children}</section>
    </main>
  );
};

export default MainPage;
