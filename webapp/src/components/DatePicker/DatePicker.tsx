import React, { useState } from 'react';
import classNames from 'classnames';
import DatePickerComponent, { ReactDatePickerProps } from 'react-datepicker';

import TextInput from '../TextInput/TextInput';
import withFormikField from '../../common/utils/withFormikField';
import { defaultDayFormat } from '../../common/utils/formatters';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

export interface DatePickerProps extends ReactDatePickerProps {
  dataId: string;
  label?: string;
  onChange: (date: Date) => void;
  className?: string;
  error?: string;
  value: string;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  dataId,
  label,
  placeholderText,
  onChange,
  className,
  value,
  name,
  error,
  ...rest
}) => {
  const [currentStartDate, selectDate] = useState<Date | null>((value && new Date(value)) || null);

  const handleChange = (date: Date) => {
    selectDate(date);
    if (onChange) onChange(date);
  };

  const classes = classNames('date-picker', className);

  return (
    <DatePickerComponent
      data-id={dataId}
      calendarClassName={classes}
      dateFormat={defaultDayFormat}
      selected={currentStartDate}
      onChange={handleChange}
      disabledKeyboardNavigation
      placeholderText={currentStartDate === null && !placeholderText ? '--/--/----' : placeholderText}
      customInput={<TextInput dataId="datePicker.input" label={label} name={name} error={error} />}
      value={value}
      {...rest}
    />
  );
};

export default withFormikField(DatePicker);
