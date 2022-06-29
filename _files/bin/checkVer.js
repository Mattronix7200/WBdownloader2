// NEED TO FIX:

// MAKE APP TO RUN UPDATE SILENTLY, USE SECOND HANDLER (SECOND TEMPLATE OF SITE TO RUN UPDATE)

var latestAppVersion= latestAppVersion;
var latestDBVersion= latestDBVersion;

  
  function readDbVer() {

  jQuery.get("./data/dbv.txt", function(text1) {
    latestDBVersion = text1;
    $('#btmi').text("Wersja bazy: "+ latestDBVersion);
  }
  )};

  readDbVer();

  function readAppVer() {

jQuery.get("./data/appv.txt", function(text2) {
  latestAppVersion = text2;
  $('#btmo').text("Wersja programu: "+ latestAppVersion);
}
)};

readAppVer();








