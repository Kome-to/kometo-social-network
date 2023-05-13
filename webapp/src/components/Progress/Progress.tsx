import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Progress.scss';

export interface ProgressProps {
  label?: string;
  max: number;
  value: number;
  className?: string;
}

const Progress = ({ label, max, value, className }: ProgressProps): React.ReactElement => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('vi');
  }, []);
  const classes = classNames('progress', className);

  return (
    <div className={classes}>
      {label && <p className='progress__title"'>{label}</p>}
      <div className="progress__content">
        <div className="progress__bar" style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );
};

export default Progress;
