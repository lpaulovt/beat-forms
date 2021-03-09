import moment from 'moment';

const formatDate = (dateString, format = 'DD/MM/YYYY') => {
  moment.updateLocale(moment.locale(), {invalidDate: '00/00/0000 00:00'});
  return moment(dateString).format(format);
};

export default formatDate;
