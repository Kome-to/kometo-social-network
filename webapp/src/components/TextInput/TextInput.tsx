import React from 'react';
import classNames from 'classnames';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

import withFormikField from '../../common/utils/withFormikField';

import './TextInput.scss';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  wrapperClass?: string;
  dataId: string;
  textarea?: boolean;

  label?: string;
  children?: React.ReactNode;
  inputType?: TextInputType;
  disabled?: boolean;
  error?: React.ReactNode;

  onlyChangeOnBlur?: boolean;

  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export enum TextInputType {
  PRIMARY = 'Primary',
}

const TextInput: React.FunctionComponent<TextInputProps & TextareaAutosizeProps> = ({
  className,
  wrapperClass,
  dataId,
  children,
  inputType = TextInputType.PRIMARY,
  error,
  label,
  onFocus,
  onBlur,
  onChange,
  value,
  onlyChangeOnBlur,
  textarea,
  maxRows = 4,
  minRows = 4,
  ...rest
}) => {
  const [inputValue, setValue] = React.useState(value);

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  const wrapClasses = classNames('text-input', wrapperClass, {
    'text-input--primary': inputType === TextInputType.PRIMARY,
  });

  const classes = classNames('text-input__input', className, {
    'text-input__input--has-error': !!error,
    'text-input__input--has-label': !!label,
    'text-input__input--textarea': textarea,
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist();

    setValue(e.target.value);
    if (!onlyChangeOnBlur && onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <div className={wrapClasses} data-id={dataId}>
      {label && <label className="text-input__label">{label}</label>}
      {textarea && (
        <TextareaAutosize
          className={classes}
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          maxRows={maxRows}
          minRows={minRows}
          placeholder={rest.placeholder}
          {...rest}
        />
      )}
      {!textarea && (
        <input className={classes} value={inputValue} onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} {...rest} />
      )}
      {error && <span className="text-input__error">{error}</span>}
    </div>
  );
};
export const FormikTextInput = withFormikField(TextInput);

export default TextInput;
