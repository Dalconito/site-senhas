var d = new Date,
data = [
  d.getDate(),
  d.getMonth()+1,
  d.getFullYear()].join('/')+' '+
  [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':');

module.exports = data;
