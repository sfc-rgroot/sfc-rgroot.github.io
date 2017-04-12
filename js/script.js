window.onload = function() {
  var modified = new Date(document.lastModified);
  var year = modified.getFullYear();
  var month = modified.getMonth() + 1;
  var date = modified.getDate();
  var str = year+"/"+month+"/"+date;

  var footer = document.getElementsByTagName("footer")[0].innerHTML = "Last update : " + str;
}
