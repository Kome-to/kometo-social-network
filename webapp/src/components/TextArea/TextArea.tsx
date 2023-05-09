import classNames from 'classnames';
import React from 'react';
import './TextArea.scss';

export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  wrapperClass?: string;
  dataId?: string;

  label?: string;
  children?: React.ReactNode;
  inputType?: TextAreaType;
  disabled?: boolean;
  error?: React.ReactNode;

  onlyChangeOnBlur?: boolean;

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export enum TextAreaType {
  PRIMARY = 'Primary',
}

const TextArea = ({
  className,
  wrapperClass,
  dataId,
  children,
  inputType = TextAreaType.PRIMARY,
  error,
  label,
  onFocus,
  onBlur,
  onChange,
  value,
  onlyChangeOnBlur,
  ...rest
}: TextAreaProps) => {
  const [inputValue, setValue] = React.useState(value);

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  const wrapClasses = classNames('text-area', wrapperClass, {
    'text-area--primary': inputType === TextAreaType.PRIMARY,
  });

  const classes = classNames('text-area__input', className, {
    'text-area__input--has-error': !!error,
    'text-area__input--has-label': !!label,
  });

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.persist();
    if (onlyChangeOnBlur && onChange) {
      onChange(e);
    }
    if (onBlur) {
      setTimeout(() => {
        onBlur(e);
      }, 0);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();

    setValue(e.target.value);
    if (!onlyChangeOnBlur && onChange) {
      onChange(e);
    }
  };

  return (
    <div className={wrapClasses} data-id={dataId}>
      {label && <span className="text-area__label">{label}</span>}
      <textarea cols={50} rows={4} className={classes} value={inputValue} onBlur={handleBlur} onChange={handleChange} {...rest} />
      {error && <span className="text-area__error">{error}</span>}
    </div>
  );
};

export default TextArea;
