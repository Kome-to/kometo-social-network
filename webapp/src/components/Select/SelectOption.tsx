import classNames from 'classnames';
import React from 'react';
import { MenuItem } from 'react-aria-menubutton';

import Icon from '../Icon/Icon';

export interface SelectOptionValue {
  text: string;
  value?: string;
  icon?: string;
}

export interface SelectOptionProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  value?: string | SelectOptionValue;
  tag?: string; // default 'span'
  icon?: string;
  dataId: string;
}

export const SelectOption = ({ children, icon, className, dataId, ...rest }: SelectOptionProps) => {
  const classes = classNames('select-option', className, {
    'select-option--has-icon': !!icon,
  });
  const iconClasses = classNames('select-option__icon', className ? `${className}__icon` : '');
  const textClasses = classNames('select-option__text', className ? `${className}__text` : '');
  return (
    <MenuItem className={classes} {...rest} data-id={dataId}>
      {icon && <Icon className={iconClasses} name={icon} />}
      {children || <span className={textClasses}>{{ ...rest }.text}</span>}
    </MenuItem>
  );
};
