import classNames from 'classnames';
import React, { useMemo } from 'react';

import './Scoreboard.scss';

export interface ScoreboardProps {
  max?: number;
  value?: number;
  showInfo?: boolean;
}
const Scoreboard: React.FC<ScoreboardProps> = ({ max = 0, value = 0, showInfo }) => {
  const quality = useMemo(() => {
    const progress = (value / max) * 100;
    if (progress <= 50) {
      return { name: 'Poor', className: 'score-board--poor' };
    }
    if (progress > 50) {
      return { name: 'Good', className: 'score-board--good' };
    }
    return { name: 'N/A', className: 'score-board--na' };
  }, [max, value]);

  return (
    <div className={quality.className}>
      <div className="score-board__view">
        <div className="score-board__point">20</div>
        <div className="score-board__desc-1">Score out of 100</div>
      </div>
      <div className="score-board__desc-2">
        Quality <span>{quality.name}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
