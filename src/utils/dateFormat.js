const {format} = require('date-fns');

function timeFormat(str) {
  console.log(str)
  return format(new Date(str), 'MM/dd hh:mm');
}

module.exports = timeFormat;
