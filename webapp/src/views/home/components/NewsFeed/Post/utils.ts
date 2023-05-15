import dayjs from 'dayjs';

export const handleTime = (time: Date) => {
  if (dayjs().diff(dayjs(time), 'second') < 60) {
    return `${Math.round(dayjs().diff(dayjs(time), 'second'))} seconds ago`;
  }

  if (dayjs().diff(dayjs(time), 'minutes') < 60) {
    return `${Math.round(dayjs().diff(dayjs(time), 'minutes'))} minutes ago`;
  }

  if (dayjs().diff(dayjs(time), 'hour') < 60) {
    return `${Math.round(dayjs().diff(dayjs(time), 'hour'))} hours ago`;
  }

  if (dayjs().diff(dayjs(time), 'day') < 30) {
    return `${Math.round(dayjs().diff(dayjs(time), 'day'))} hours`;
  }
  return dayjs(time).format('DD MMMM YYYY');
};
