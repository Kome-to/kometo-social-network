import classNames from 'classnames';
import React from 'react';
import Icon, { IconSize } from '../Icon/Icon';
import './Button.scss';

export enum ButtonType {
  Primary,
  Subtle,
  Icon,
}

export enum ButtonIconPlacement {
  Left,
  Right,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  className?: string;
  children?: React.ReactNode;
  dataId?: string;
  icon?: string;
  iconSize?: IconSize;
  iconRotation?: number;
  iconPlacement?: ButtonIconPlacement;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  buttonType = ButtonType.Primary,
  children,
  dataId,
  icon,
  iconPlacement,
  iconSize,
  iconRotation,
  ...rest
}) => {
  const classes = classNames('button', className, {
    'button--primary': buttonType === ButtonType.Primary,
    'button--subtle': buttonType === ButtonType.Subtle,
    'button--has-icon': !!icon,
    'button--icon': buttonType === ButtonType.Icon,
  });

  return (
    <button data-id={dataId} type="button" className={classes} {...rest}>
      {icon && (iconPlacement === ButtonIconPlacement.Left || buttonType === ButtonType.Icon) && (
        <Icon name={icon} size={iconSize} rotation={iconRotation} className="button__icon" />
      )}
      {buttonType !== ButtonType.Icon && <span className="button__content">{children}</span>}

      {icon && iconPlacement === ButtonIconPlacement.Right && (
        <Icon name={icon} size={iconSize} rotation={iconRotation} className="button__icon button__icon--right" />
      )}
    </button>
  );
};

export default Button;
