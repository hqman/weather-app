export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date;
  return time;
}


export function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
} 