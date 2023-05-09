import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';

import Icon, { ICONS } from '../Icon/Icon';

import './Checkbox.scss';

export interface CheckboxProps {
  name: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: boolean;
  label?: string | React.ReactNode | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  partiallyChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  disabled,
  readonly,
  onBlur,
  onChange,
  value,
  label,
  partiallyChecked,
}: CheckboxProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  const classes = classNames('checkbox', className, { 'checkbox--has-focus': hasFocus }, { 'checkbox--no-label': !label });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
    setHasFocus(false);
  };
  const handleFocus = () => {
    setHasFocus(true);
  };

  return (
    <label className={classes} data-id={`${name}.label`}>
      <input
        data-id={`${name}.input`}
        disabled={disabled || readonly}
        checked={value}
        type="checkbox"
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="checkbox__input"
      />
      <span className="checkbox__title">{label}</span>
      <span className="checkbox__checkmark">
        {partiallyChecked ? (
          <span className="checkbox__icon checkbox__icon--partial" />
        ) : (
          <Icon name={ICONS.CHECK} className="checkbox__icon" />
        )}
      </span>
    </label>
  );
};

Checkbox.defaultProps = {
  readonly: false,
};

export default Checkbox;
