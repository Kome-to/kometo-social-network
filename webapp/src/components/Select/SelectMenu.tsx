import classNames from 'classnames';
import React from 'react';
import { Menu } from 'react-aria-menubutton';

import Scrollbars from '../Scrollbars/Scrollbars';

export interface SelectMenuProps {
  children?: React.ReactNode;
  className?: string;
  tag?: string; // default 'span'
  menuHeight?: number;
  dataId?: string;
}

export const SelectMenu = ({ children, className, menuHeight = 250, dataId, ...rest }: SelectMenuProps) => {
  const classes = classNames('select__menu', className);
  return (
    <Menu className={classes} {...rest}>
      <Scrollbars autoHeight autoHeightMax={menuHeight} data-id="scrollbarMenu">
        {children}
      </Scrollbars>
    </Menu>
  );
};
