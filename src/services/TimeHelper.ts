import dayjs from 'dayjs';

const TimeHelper = {
  current: (format = 'DD.MM.YYYY') => {
    return dayjs().format(format);
  },
  to: (date: dayjs.ConfigType, format = 'DD.MM.YYYY') => {
    return dayjs(date).format(format);
  },
};

export default TimeHelper;
