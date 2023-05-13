import classNames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './FilterBy.scss';

export interface FilterOptions {
  text: string;
  value: string;
}

export interface FilterByProps {
  className?: string;
  children?: React.ReactNode;
  filters: FilterOptions[];
  onFilter: (value: string) => void;
}

const FilterBy: React.FunctionComponent<FilterByProps> = ({ filters, className }) => {
  const { t } = useTranslation();
  const [currentFilter, setFilterValue] = React.useState(filters[0].value);

  const classes = classNames('filter-actions', className);

  return (
    <div className={classes}>
      <span className="filter-actions__label">{t('components.filter.filterBy')}</span>
      <div className="filter-actions__content">
        {filters.map((f) => (
          <span
            className={classNames('filter-actions__options', {
              'filter-actions__options--selected': f.value === currentFilter,
            })}
            key={`${f.text}.${f.value}`}
            onClick={() => setFilterValue(f.value)}
          >
            {t(f.text)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterBy;
