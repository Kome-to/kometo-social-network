import classNames from 'classnames';
import React from 'react';
import { Wrapper, WrapperState } from 'react-aria-menubutton';

import './Select.scss';
import { SelectOptionValue } from './SelectOption';

export interface SelectWrapperProps {
  children?: React.ReactNode;
  className?: string;
  onSelection?: (value: string | SelectOptionValue) => void;
  onMenuToggle?: (state: WrapperState) => void;
  closeOnSelection?: boolean;
  closeOnBlur?: boolean;
  tag?: string;
  label?: string;
  labelStyle?: LabelStyle;
  isOpen?: boolean;
}

export enum LabelStyle {
  DEFAULT = 'DEFAULT',
  UPPERCASE = 'UPPERCASE',
}

export const SelectWrapper = ({ isOpen, label, labelStyle, children, className, ...rest }: SelectWrapperProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(isOpen);

  const classes = classNames('select', className, {
    'select--label-uppercase': labelStyle === LabelStyle.UPPERCASE,
    'select--has-focus': isMenuOpen,
  });
  return (
    <Wrapper
      className={classes}
      {...rest}
      onMenuToggle={(args: WrapperState) => {
        setIsMenuOpen(args.isOpen);
      }}
    >
      {!!label && <label className="select__label">{label}</label>}
      {children}
    </Wrapper>
  );
};
