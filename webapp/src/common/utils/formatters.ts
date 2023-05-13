import { format, isValid } from 'date-fns';

export const defaultDayFormat = 'dd/MM/yyyy';
export const backendDayFormat = 'yyyy-MM-dd HH:mm:ss';

/**
 * formatDate
 * @param value: Date
 * @param formatString: string - defaults to 'dd.MM.yyyy'
 * @returns date: string - date as string formatted according to the provided format string
 * @example formatDate(new Date(), 'HH:mm MM-dd-yyyy') // returns ex. '16:35 11-21-2018'
 */
export const formatDate = (value: Date, formatString = defaultDayFormat): string => {
  if (isValid(value)) {
    return format(value, formatString);
  }
  return '';
};
