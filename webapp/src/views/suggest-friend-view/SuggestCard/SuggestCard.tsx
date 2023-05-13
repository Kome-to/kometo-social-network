import React from 'react';
import Card from '../../../components/Card/Card';

import './SuggestCard.scss';
import Button from '../../../components/Button/Button';

const SuggestCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Card className="suggest-card">
      <div className="suggest-card__avatar">
        <img src={data.avatar} alt="" />
      </div>
      <div className="suggest-card__name">{data.name}</div>
      <Button className="suggest-card__add">ADD FRIEND</Button>
    </Card>
  );
};

export default SuggestCard;
