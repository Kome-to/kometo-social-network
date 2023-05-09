import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import CardHeader from './components/CardHeader';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactElement;
  footer?: React.ReactElement;
  title?: string;
}

export type CardType = CardProps;

const Card = ({ children, className, header, footer, title }: CardType): React.ReactElement => {
  const classes = classNames('card', className);

  return (
    <div className={classes}>
      {title ? <CardHeader title={title} /> : header}
      {children}
      {footer}
    </div>
  );
};

export default Card;
