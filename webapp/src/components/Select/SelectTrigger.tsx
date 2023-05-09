import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-aria-menubutton';

import Icon, { ICONS } from '../Icon/Icon';

export interface SelectButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  dataId: string;
}

export const SelectTrigger = ({ children, className, dataId, ...rest }: SelectButtonProps) => {
  const classes = classNames('select__trigger', className);
  return (
    <Button className={classes} {...rest} tag="div" data-id={dataId}>
      {children}
      <FontAwesomeIcon icon={faChevronDown} size="1x" color="#65a339" />
    </Button>
  );
};
