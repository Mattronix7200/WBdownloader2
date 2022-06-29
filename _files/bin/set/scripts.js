// const path = require("path");
// const url = require('url')
// const {shell } = require("electron");

// const runset=document.getElementById('set_open')
// runset.addEventListener('click',function(event){
// const runset = url.format({
//  pathname: path.join(__dirname, './../settings_aria.bat')
// })
// var spawnObj = require('child_process').spawn,
// progToOpen = spawnObj('C:\\windows\\notepad.exe', [runset]);
// })

  jQuery.get('./../settings_aria.bat', function (data) {
  
  var lines = data.split("\n");
  
  var set1= lines[0];
  var set2a= lines[1];
  var set2c= lines[2];
  var set2d= lines[3];
  var set3= lines[4];
  var set4= lines[5];
  var set5= lines[6];
  var set6= lines[7];
  var set7= lines[8];
  var set8= lines[9];
  var set9= lines[10];



  
  const n1a= set1.substr(0,19);
  var n1b= set1.substr(19,999);
  var n2a= set2a.substr(0,4);
  var n2c= set2c.substr(0,4);
  var n2d= set2d.substr(0,4);
  var n3= set3.substr(0,4);
  var n4= set4.substr(0,4);
  var n5= set5.substr(0,4);
  var n6= set6.substr(0,4);
  var n7= set7.substr(0,4);
  var n8= set8.substr(0,4);
  var n9= set9.substr(0,4);

  
  $("#set_1").val(n1b);
  
  if (n2a == "@REM") {
    $('#set_2a').attr('checked', false);
  }
  else {
    $('#set_2a').attr('checked', true);
  }

  if (n2c == "@REM") {
    $('#set_2c').attr('checked', false);
  }
  else {
    $('#set_2c').attr('checked', true);
  }

  if (n2d == "@REM") {
    $('#set_2d').attr('checked', false);
  }
  else {
    $('#set_2d').attr('checked', true);
  }
  
  if (n3 == "@REM") {
    $('#set_3').attr('checked', false);
  }
  else {
    $('#set_3').attr('checked', true);
  }

  if (n4 == "@REM") {
    $('#set_4').attr('checked', false);
  }
  else {
    $('#set_4').attr('checked', true);
  }

  if (n5 == "@REM") {
    $('#set_5').attr('checked', false);
  }
  else {
    $('#set_5').attr('checked', true);
  }

  if (n6 == "@REM") {
    $('#set_6').attr('checked', false);
  }
  else {
    $('#set_6').attr('checked', true);
  }

  if (n7 == "@REM") {
    $('#set_7').attr('checked', false);
  }
  else {
    $('#set_7').attr('checked', true);
  }

  if (n8 == "@REM") {
    $('#set_8').attr('checked', false);
  }
  else {
    $('#set_8').attr('checked', true);
  }

  if (n9 == "@REM") {
    $('#set_9').attr('checked', false);
  }
  else {
    $('#set_9').attr('checked', true);
  }


$(document).ready(function () {

  function set9set() {
    var set9_val = $('#set_9').is(':checked');
    if (set9_val == true) {

      let n9 = document.getElementById("set_9").value;
      var set9= lines[10];
      set9_set_n = "@REM " + set9;
      set9_set_y = "set certbp=--check-certificate=false";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set9, set9_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 

    } 
    if (set9_val == false) {

      let n9 = document.getElementById("set_9").value;
      var set9= lines[10];
      set9_set_n = "@REM " + set9;
      set9_set_y = "set certbp=--check-certificate=false";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set9, set9_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }

  function set8set() {
    var set8_val = $('#set_8').is(':checked');
    if (set8_val == true) {

      let n8 = document.getElementById("set_8").value;
      var set8= lines[9];
      set8_set_n = "@REM " + set8;
      set8_set_y = "set olddn=\"--user-agent=Mozilla/5.0\"";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set8, set8_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n8= set8.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set8_val == false) {

      let n8 = document.getElementById("set_8").value;
      var set8= lines[9];
      set8_set_n = "@REM " + set8;
      set8_set_y = "set olddn=\"--user-agent=Mozilla/5.0\"";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set8, set8_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }


  function set7set() {
    var set7_val = $('#set_7').is(':checked');
    if (set7_val == true) {

      let n7 = document.getElementById("set_7").value;
      var set7= lines[8];
      set7_set_n = "@REM " + set7;
      set7_set_y = "set max=--max-overall-download-limit=512K";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set7, set7_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n7= set7.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set7_val == false) {

      let n7 = document.getElementById("set_7").value;
      var set7= lines[8];
      set7_set_n = "@REM " + set7;
      set7_set_y = "set max=--max-overall-download-limit=512K";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set7, set7_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }


  function set6set() {
    var set6_val = $('#set_6').is(':checked');
    if (set6_val == true) {

      let n6 = document.getElementById("set_6").value;
      var set6= lines[7];
      set6_set_n = "@REM " + set6;
      set6_set_y = "set logme=--log-level=info --log=\"./logs/download_log.txt\"";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set6, set6_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n6= set6.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set6_val == false) {

      let n6 = document.getElementById("set_6").value;
      var set6= lines[7];
      set6_set_n = "@REM " + set6;
      set6_set_y = "set logme=--log-level=info --log=\"./logs/download_log.txt\"";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set6, set6_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }

  function set5set() {
    var set5_val = $('#set_5').is(':checked');
    if (set5_val == true) {

      let n5 = document.getElementById("set_5").value;
      var set5= lines[6];
      set5_set_n = "@REM " + set5;
      set5_set_y = "set connect=--enable-http-keep-alive=true --enable-http-pipelining=true";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set5, set5_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n5= set5.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set5_val == false) {

      let n5 = document.getElementById("set_5").value;
      var set5= lines[6];
      set5_set_n = "@REM " + set5;
      set5_set_y = "set connect=--enable-http-keep-alive=true --enable-http-pipelining=true";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set5, set5_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }

  
  function set2dset() {
    var set2d_val = $('#set_2d').is(':checked');
    if (set2d_val == true) {

      let n2d = document.getElementById("set_2d").value;
      var set2d= lines[3];
      set2d_set_n = "@REM " + set2d;
      set2d_set_y = "set inetset2=--file-allocation=none";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2d, set2d_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n2d= set2d.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set2d_val == false) {

      let n2d = document.getElementById("set_2d").value;
      var set2d= lines[3];
      set2d_set_n = "@REM " + set2d;
      set2d_set_y = "set inetset2=--file-allocation=none";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2d, set2d_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }


  function set2aset() {
    var set2a_val = $('#set_2a').is(':checked');
    if (set2a_val == true) {

      let n2a = document.getElementById("set_2a").value;
      var set2a= lines[1];
      set2a_set_n = "@REM " + set2a;
      set2a_set_y = "set inetset=--max-connection-per-server=16";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2a, set2a_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n2a= set2a.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set2a_val == false) {

      let n2a = document.getElementById("set_2a").value;
      var set2a= lines[1];
      set2a_set_n = "@REM " + set2a;
      set2a_set_y = "set inetset=--max-connection-per-server=16";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2a, set2a_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }


  function set2cset() {
    var set2c_val = $('#set_2c').is(':checked');
    if (set2c_val == true) {

      let n2c = document.getElementById("set_2c").value;
      var set2c= lines[2];
      set2c_set_n = "@REM " + set2c;
      set2c_set_y = "set purges=-k20M -x16 -s16 -j25 -m0 --disk-cache=64M";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2c, set2c_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n2a= set2a.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set2c_val == false) {

      let n2c = document.getElementById("set_2c").value;
      var set2c= lines[2];
      set2c_set_n = "@REM " + set2c;
      set2c_set_y = "set purges=-k20M -x16 -s16 -j25 -m0 --disk-cache=64M";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set2c, set2c_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }


  function set3set() {
    var set3_val = $('#set_3').is(':checked');
    if (set3_val == true) {

      let n3 = document.getElementById("set_3").value;
      var set3= lines[4];
      set3_set_n = "@REM " + set3;
      set3_set_y = "set contd=-continue=true";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set3, set3_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n2a= set2a.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set3_val == false) {

      let n3 = document.getElementById("set_3").value;
      var set3= lines[4];
      set3_set_n = "@REM " + set3;
      set3_set_y = "set contd=-continue=true";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set3, set3_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }

  function set4set() {
    var set4_val = $('#set_4').is(':checked');
    if (set4_val == true) {

      let n4 = document.getElementById("set_4").value;
      var set4= lines[5];
      set4_set_n = "@REM " + set4;
      set4_set_y = "set verify=-V";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set4, set4_set_y);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
 


      // var n2a= set2a.substr(0,4);
      // var n2c= set2c.substr(0,4);

    } 
    if (set4_val == false) {

      let n4 = document.getElementById("set_4").value;
      var set4= lines[5];
      set4_set_n = "@REM " + set4;
      set4_set_y = "set verify=-V";

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set4, set4_set_n);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      })
      
    

    }
  
  }

  $("#getSet2d").click(function () {
    set2dset();
    
  });

  $("#getSet2a").click(function () {
    set2aset();
    
  });

  $("#getSet2c").click(function () {
    set2cset();
    
  });

  $("#getSet3").click(function () {
    set3set();
    
  });

  $("#getSet4").click(function () {
    set4set();
    
  });

  $("#getSet5").click(function () {
    set5set();
    
  });

  $("#getSet6").click(function () {
    set6set();
    
  });

    $("#getSet7").click(function () {
    set7set();
    
  });

  $("#getSet8").click(function () {
    set8set();
    
  });

  $("#getSet9").click(function () {
    set9set();
    
  });

    $("#getLoc").click(function () {
      getLocation();
      
    });
  }); 

  
  function getLocation() {
      let n1b = document.getElementById("set_1").value;
      var set1= lines[0];
      set1_set = n1a + n1b;
      console.log(n1b);
      console.log(set1_set);

      // import * as fs from 'fs/promises'
     
      // fs.appendFileSync('./../../resources/app/bin/settings_aria.bat', set1);

      var fs = require('fs')

      fs.readFile('./resources/app/bin/settings_aria.bat', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(set1, set1_set);

        fs.writeFile('./resources/app/bin/settings_aria.bat', result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
        window.location.reload()
      });
      };

    });


