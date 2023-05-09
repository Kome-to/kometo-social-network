import React from 'react';
import './CardHeader.scss';

export interface CardHeaderProps {
  title: string;
}

const CardHeader = ({ title }: CardHeaderProps) => {
  return <div className="card-header">{title}</div>;
};

export default CardHeader;
