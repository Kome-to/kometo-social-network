import React from 'react';
import { WrapperState } from 'react-aria-menubutton';

import { SelectMenu } from './SelectMenu';
import { SelectOption, SelectOptionValue } from './SelectOption';
import { SelectTrigger } from './SelectTrigger';
import { SelectWrapper } from './SelectWrapper';
import withFormikField from '../../common/utils/withFormikField';

export interface SelectProps {
  value: SelectOptionValue;
  name?: string;
  menuItems: SelectOptionValue[];
  onChange?: (value: string | SelectOptionValue) => void;
  isOpen?: boolean;
  handleMenuToggle?: (value: WrapperState) => void;
  label?: string;
  className?: string;
  placeholder?: string;
  dataId: string;
}

export const Select: React.FunctionComponent<SelectProps> = ({
  value,
  menuItems,
  onChange,
  isOpen,
  handleMenuToggle,
  label,
  className,
  placeholder,
  dataId,
}) => {
  return (
    <SelectWrapper
      isOpen={isOpen}
      className={className}
      label={label}
      onMenuToggle={handleMenuToggle}
      closeOnSelection
      onSelection={(val) => {
        // eslint-disable-next-line no-prototype-builtins
        if (typeof val === 'object' && val.hasOwnProperty('value') && val.hasOwnProperty('text') && onChange) {
          onChange(val);
        }
      }}
    >
      <SelectTrigger dataId={dataId}>
        {value && <SelectOption text={value.text} value={value} icon={value.icon} dataId="selected" />}
        {!value && <SelectOption className="select-option--placeholder" text={placeholder} value={undefined} dataId="placeholder" />}
      </SelectTrigger>
      <SelectMenu dataId={dataId}>
        {menuItems.map((menuItem) => (
          <SelectOption
            value={menuItem}
            text={menuItem.text}
            icon={menuItem.icon}
            key={`${menuItem.text}.${menuItem.value}`}
            dataId="option"
          />
        ))}
      </SelectMenu>
    </SelectWrapper>
  );
};

export const SelectField = withFormikField(Select);
