import React from 'react';
import classNames from 'classnames';
import CardHeader from './components/CardHeader';
import './Card.scss';
import Icon from '../Icon/Icon';

export interface CardListProps {
  className?: string;
  children: React.ReactNode;
  icon?: string;
  actions?: React.ReactNode;
}

const CardList: React.FunctionComponent<CardListProps> = ({ children, className, icon, actions }): React.ReactElement => {
  const classes = classNames('card-list', className);

  return (
    <div className={classes}>
      <div className="card-list__content">
        <Icon name={icon} className="card-list__prefix-icon" />
        {children}
      </div>
      <div className="card-list__actions">{actions}</div>
    </div>
  );
};

export default CardList;
