$(document).ready(function () {

    $(".mi_1").click(function () {
        $(".search").css("display", "block");
     });

     $(".mi_5").click(function () {
        window.location ='https://windowsbase.pl';
     });

     $(".closebtn4").click(function () {
        $(".search").css("display", "none");
     });

        $(".btn").click(function () {

           $("#dialog").css("display", "block");
           $("#dialog_bkg").css("display", "block");

        });

        $(".closebtn3").click(function () {
           $("#dialog_bkg").css("display", "none");
           $("#dialog").css("display", "none");
        });

        $(".closebtn").click(function () {
           $("#dialog_bkg").css("display", "none");
           $(".toolsbox").css("display", "none");
        
           $("body").css("overflow", "scroll");
           $(".toolsbox").css("overflow", "hidden");
        });

        $(".closebtn2").click(function () {
           $("#dialog_bkg").css("display", "none");
           $(".userbox").css("display", "none");
        
           $("body").css("overflow", "scroll");
           $(".userbox").css("overflow", "hidden");
        });


        $("#menubtn_b3").click(function () {
            location.href = "index_en.html";
         });

         $("#menubtn_b6").click(function () {
            location.href = "index.html";
         });


        $(".mi_2").click(function () {
           $("#dialog_bkg").css("display", "block");
           $("body").css("overflow", "hidden");
           $(".toolsbox").css("overflow-y", "scroll");
           $(".toolsbox").css("overflow-x", "hidden");
           $(".toolsbox").css("display", "block");
        });

        $(".mi_4").click(function () {
           $("#dialog_bkg").css("display", "block");
           $("body").css("overflow", "hidden");
           $(".userbox").css("overflow-y", "scroll");
           $(".userbox").css("overflow-x", "hidden");
           $(".userbox").css("display", "block");
        });
        
         $("#user1").click(function () {   
           $(".frame1").css("display", "block");
           $(".frame2").css("display", "none");
           $(".frame3").css("display", "none");
           $(".frame4").css("display", "none");
           $(".frame5").css("display", "none");
           $(".frame6").css("display", "none");
           $(".frame7").css("display", "none");
           $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
         });

         $("#user2").click(function () {   
           $(".frame2").css("display", "block");
           $(".frame1").css("display", "none");
           $(".frame3").css("display", "none");
           $(".frame4").css("display", "none");
           $(".frame5").css("display", "none");
           $(".frame6").css("display", "none");
           $(".frame7").css("display", "none");
           $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
         });

         $("#user3").click(function () {   
           $(".frame3").css("display", "block");
           $(".frame1").css("display", "none");
           $(".frame2").css("display", "none");
           $(".frame4").css("display", "none");
           $(".frame5").css("display", "none");
           $(".frame6").css("display", "none");
           $(".frame7").css("display", "none");
           $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
         });

         $("#user4").click(function () {   
           $(".frame4").css("display", "block");
           $(".frame1").css("display", "none");
           $(".frame2").css("display", "none");
           $(".frame3").css("display", "none");
           $(".frame5").css("display", "none");
           $(".frame6").css("display", "none");
           $(".frame7").css("display", "none");
           $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
         });

         $("#user5").click(function () {   
            // $(".frame5").css("display", "block");
            window.location="./bin/set/settings.html";
        //     $(".frame1").css("display", "none");
        //     $(".frame2").css("display", "none");
        //     $(".frame3").css("display", "none");
        //     $(".frame4").css("display", "none");
        //     $(".frame6").css("display", "none");
        //     $(".frame7").css("display", "none");
        //     $(".frame8").css("display", "none");
        //    $(".frame9").css("display", "none");
          });

          $("#user6").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");
            $(".frame5").css("display", "none");
            $(".frame7").css("display", "none");
            $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
          });

          $("#user7").click(function () {   
            $(".frame7").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");
            $(".frame5").css("display", "none");
            $(".frame6").css("display", "none");
            $(".frame8").css("display", "none");
           $(".frame9").css("display", "none");
          });

          $("#user8").click(function () {   
            $(".frame8").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");
            $(".frame5").css("display", "none");
            $(".frame6").css("display", "none");
            $(".frame7").css("display", "none");
            $(".frame9").css("display", "none");
          });

          $("#user9").click(function () {   
            $(".frame9").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");
            $(".frame5").css("display", "none");
            $(".frame6").css("display", "none");
            $(".frame7").css("display", "none");
            $(".frame8").css("display", "none");
          });

          $("#ln1").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln2").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln3").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln4").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln5").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln6").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln7").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln8").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln9").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln10").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln11").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln12").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln13").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

          $("#ln14").click(function () {   
            $(".frame6").css("display", "block");
            $(".frame1").css("display", "none");
            $(".frame2").css("display", "none");
            $(".frame3").css("display", "none");
            $(".frame4").css("display", "none");

          });

    $("#aria").click(function () {   
        $("#dialog_bkg").css("display", "none");
        $("#dialog").css("display", "none");
    });
    
    $("#fdm").click(function () {
      $("#dialog_bkg").css("display", "none");
      $("#dialog").css("display", "none");
    });
    
    $("#jd").click(function () {
      $("#dialog_bkg").css("display", "none");
      $("#dialog").css("display", "none");
    });

$("#soft2").hover(function(){
    $('#stag1').css("display", "block");
    $('#softimg1').css("display", "block");
},function(){
    $('#stag1').css("display", "none");
    $('#softimg1').css("display", "none");
});

$("#soft3").hover(function(){
    $('#stag1').css("display", "block");
    $('#softimg2').css("display", "block");
},function(){
    $('#stag1').css("display", "none");
    $('#softimg2').css("display", "none");
});

$("#soft29").hover(function(){
    $('#stag1').css("display", "block");
    $('#softimg3').css("display", "block");
},function(){
    $('#stag1').css("display", "none");
    $('#softimg3').css("display", "none");
});

$("#soft4").hover(function(){
    $('#stag2').css("display", "block");
    $('#softimg4').css("display", "block");
},function(){
    $('#stag2').css("display", "none");
    $('#softimg4').css("display", "none");
});

$("#soft5").hover(function(){
    $('#stag3').css("display", "block");
    $('#softimg5').css("display", "block");
},function(){
    $('#stag3').css("display", "none");
    $('#softimg5').css("display", "none");
});

$("#soft11").hover(function(){
    $('#stag4').css("display", "block");
    $('#softimg6').css("display", "block");
},function(){
    $('#stag4').css("display", "none");
    $('#softimg6').css("display", "none");
});

$("#soft22").hover(function(){
    $('#stag5').css("display", "block");
    $('#softimg7').css("display", "block");
},function(){
    $('#stag5').css("display", "none");
    $('#softimg7').css("display", "none");
});

$("#soft18").hover(function(){
    $('#stag6').css("display", "block");
    $('#softimg8').css("display", "block");
},function(){
    $('#stag6').css("display", "none");
    $('#softimg8').css("display", "none");
});

$("#soft24").hover(function(){
    $('#stag7').css("display", "block");
    $('#softimg11').css("display", "block");
},function(){
    $('#stag7').css("display", "none");
    $('#softimg11').css("display", "none");
});

$("#soft31").hover(function(){
    $('#stag7').css("display", "block");
    $('#softimg12').css("display", "block");
},function(){
    $('#stag7').css("display", "none");
    $('#softimg12').css("display", "none");
});

$("#soft32").hover(function(){
    $('#stag8').css("display", "block");
    $('#softimg13').css("display", "block");
},function(){
    $('#stag8').css("display", "none");
    $('#softimg13').css("display", "none");
});

$("#soft43").hover(function(){
    $('#stag9').css("display", "block");
    $('#softimg14').css("display", "block");
},function(){
    $('#stag9').css("display", "none");
    $('#softimg14').css("display", "none");
});

$("#soft44").hover(function(){
    $('#stag9').css("display", "block");
    $('#softimg15').css("display", "block");
},function(){
    $('#stag9').css("display", "none");
    $('#softimg15').css("display", "none");
});

$("#soft45").hover(function(){
    $('#stag10').css("display", "block");
    $('#softimg16').css("display", "block");
},function(){
    $('#stag10').css("display", "none");
    $('#softimg16').css("display", "none");
});

$("#soft25").hover(function(){
    $('#stag11').css("display", "block");
    $('#softimg17').css("display", "block");
},function(){
    $('#stag11').css("display", "none");
    $('#softimg17').css("display", "none");
});

$("#soft26").hover(function(){
    $('#stag12').css("display", "block");
    $('#softimg18').css("display", "block");
},function(){
    $('#stag12').css("display", "none");
    $('#softimg18').css("display", "none");
});

$("#soft27").hover(function(){
    $('#stag12').css("display", "block");
    $('#softimg19').css("display", "block");
},function(){
    $('#stag12').css("display", "none");
    $('#softimg19').css("display", "none");
});

$("#soft6").hover(function(){
    $('#stag13').css("display", "block");
    $('#softimg20').css("display", "block");
},function(){
    $('#stag13').css("display", "none");
    $('#softimg20').css("display", "none");
});

$("#soft7").hover(function(){
    $('#stag13').css("display", "block");
    $('#softimg20').css("display", "block");
},function(){
    $('#stag13').css("display", "none");
    $('#softimg20').css("display", "none");
});

$("#soft23").hover(function(){
    $('#stag14').css("display", "block");
    $('#softimg21').css("display", "block");
},function(){
    $('#stag14').css("display", "none");
    $('#softimg21').css("display", "none");
});

$("#soft14").hover(function(){
    $('#stag15').css("display", "block");
    $('#softimg22').css("display", "block");
},function(){
    $('#stag15').css("display", "none");
    $('#softimg22').css("display", "none");
});

$("#soft20").hover(function(){
    $('#stag15').css("display", "block");
    $('#softimg9').css("display", "block");
},function(){
    $('#stag15').css("display", "none");
    $('#softimg9').css("display", "none");
});

$("#soft21").hover(function(){
    $('#stag15').css("display", "block");
    $('#softimg10').css("display", "block");
},function(){
    $('#stag15').css("display", "none");
    $('#softimg10').css("display", "none");
});

$("#soft30").hover(function(){
    $('#stag16').css("display", "block");
    $('#softimg23').css("display", "block");
},function(){
    $('#stag16').css("display", "none");
    $('#softimg23').css("display", "none");
});

$("#soft42").hover(function(){
    $('#stag16').css("display", "block");
    $('#softimg24').css("display", "block");
},function(){
    $('#stag16').css("display", "none");
    $('#softimg24').css("display", "none");
});

$("#soft39").hover(function(){
    $('#stag17').css("display", "block");
    $('#softimg25').css("display", "block");
},function(){
    $('#stag17').css("display", "none");
    $('#softimg25').css("display", "none");
});

$("#soft40").hover(function(){
    $('#stag17').css("display", "block");
    $('#softimg25').css("display", "block");
},function(){
    $('#stag17').css("display", "none");
    $('#softimg25').css("display", "none");
});

$("#soft8").hover(function(){
    $('#stag19').css("display", "block");
    $('#softimg26').css("display", "block");
},function(){
    $('#stag19').css("display", "none");
    $('#softimg26').css("display", "none");
});

$("#soft9").hover(function(){
    $('#stag19').css("display", "block");
    $('#softimg27').css("display", "block");
},function(){
    $('#stag19').css("display", "none");
    $('#softimg27').css("display", "none");
});

$("#soft10").hover(function(){
    $('#stag19').css("display", "block");
    $('#softimg27').css("display", "block");
},function(){
    $('#stag19').css("display", "none");
    $('#softimg27').css("display", "none");
});

$("#soft12").hover(function(){
    $('#stag20').css("display", "block");
    $('#softimg28').css("display", "block");
},function(){
    $('#stag20').css("display", "none");
    $('#softimg28').css("display", "none");
});

$("#soft13").hover(function(){
    $('#stag20').css("display", "block");
    $('#softimg28').css("display", "block");
},function(){
    $('#stag20').css("display", "none");
    $('#softimg28').css("display", "none");
});

$("#soft16").hover(function(){
    $('#stag21').css("display", "block");
    $('#softimg29').css("display", "block");
},function(){
    $('#stag21').css("display", "none");
    $('#softimg29').css("display", "none");
});

$("#soft17").hover(function(){
    $('#stag21').css("display", "block");
    $('#softimg30').css("display", "block");
},function(){
    $('#stag21').css("display", "none");
    $('#softimg30').css("display", "none");
});

$("#soft19").hover(function(){
    $('#stag22').css("display", "block");
    $('#softimg31').css("display", "block");
},function(){
    $('#stag22').css("display", "none");
    $('#softimg31').css("display", "none");
});

$("#soft34").hover(function(){
    $('#stag23').css("display", "block");
    $('#softimg32').css("display", "block");
},function(){
    $('#stag23').css("display", "none");
    $('#softimg32').css("display", "none");
});

$("#soft37").hover(function(){
    $('#stag23').css("display", "block");
    $('#softimg33').css("display", "block");
},function(){
    $('#stag23').css("display", "none");
    $('#softimg33').css("display", "none");
});

$("#soft38").hover(function(){
    $('#stag24').css("display", "block");
    $('#softimg34').css("display", "block");
},function(){
    $('#stag24').css("display", "none");
    $('#softimg34').css("display", "none");
});

$("#soft35").hover(function(){
    $('#stag25').css("display", "block");
    $('#softimg35').css("display", "block");
},function(){
    $('#stag25').css("display", "none");
    $('#softimg35').css("display", "none");
});

$("#soft46").hover(function(){
    $('#stag25').css("display", "block");
    $('#softimg36').css("display", "block");
},function(){
    $('#stag25').css("display", "none");
    $('#softimg36').css("display", "none");
});

$("#soft36").hover(function(){
    $('#stag25').css("display", "block");
    $('#softimg37').css("display", "block");
},function(){
    $('#stag25').css("display", "none");
    $('#softimg37').css("display", "none");
});

$("#soft41").hover(function(){
    $('#stag25').css("display", "block");
    $('#softimg38').css("display", "block");
},function(){
    $('#stag25').css("display", "none");
    $('#softimg38').css("display", "none");
});

$("#soft47").hover(function(){
    $('#stag26').css("display", "block");
    $('#softimg39').css("display", "block");
},function(){
    $('#stag26').css("display", "none");
    $('#softimg39').css("display", "none");
});

$("#soft1").hover(function(){
    $('#stag18').css("display", "block");
},function(){
    $('#stag18').css("display", "none");
});

$("#soft49").hover(function(){
    $('#stag27').css("display", "block");
},function(){
    $('#stag27').css("display", "none");
});

$("#soft50").hover(function(){
    $('#stag28').css("display", "block");
},function(){
    $('#stag28').css("display", "none");
});

$("#soft51").hover(function(){
    $('#stag29').css("display", "block");
},function(){
    $('#stag29').css("display", "none");
});

$("#soft52").hover(function(){
    $('#stag30').css("display", "block");
},function(){
    $('#stag30').css("display", "none");
});

$("#soft53").hover(function(){
    $('#stag31').css("display", "block");
},function(){
    $('#stag31').css("display", "none");
});

$("#soft54").hover(function(){
    $('#stag42').css("display", "block");
},function(){
    $('#stag42').css("display", "none");
});

$("#soft55").hover(function(){
    $('#stag32').css("display", "block");
},function(){
    $('#stag32').css("display", "none");
});

$("#soft56").hover(function(){
    $('#stag33').css("display", "block");
},function(){
    $('#stag33').css("display", "none");
});

$("#soft57").hover(function(){
    $('#stag43').css("display", "block");
},function(){
    $('#stag43').css("display", "none");
});

$("#soft58").hover(function(){
    $('#stag34').css("display", "block");
},function(){
    $('#stag34').css("display", "none");
});

$("#soft59").hover(function(){
    $('#stag35').css("display", "block");
},function(){
    $('#stag35').css("display", "none");
});

$("#soft60").hover(function(){
    $('#stag44').css("display", "block");
},function(){
    $('#stag44').css("display", "none");
});

$("#soft61").hover(function(){
    $('#stag36').css("display", "block");
},function(){
    $('#stag36').css("display", "none");
});

$("#soft62").hover(function(){
    $('#stag37').css("display", "block");
},function(){
    $('#stag37').css("display", "none");
});

$("#soft63").hover(function(){
    $('#stag38').css("display", "block");
},function(){
    $('#stag38').css("display", "none");
});

$("#soft64").hover(function(){
    $('#stag39').css("display", "block");
},function(){
    $('#stag39').css("display", "none");
});

$("#soft65").hover(function(){
    $('#stag40').css("display", "block");
},function(){
    $('#stag40').css("display", "none");
});
$("#soft28").hover(function(){
    $('#stag41').css("display", "block");
    $('#softimg40').css("display", "block");
},function(){
    $('#stag41').css("display", "none");
    $('#softimg40').css("display", "none");
});

$("#soft15").hover(function(){
    $('#stag41').css("display", "block");
    $('#softimg41').css("display", "block");
},function(){
    $('#stag41').css("display", "none");
    $('#softimg41').css("display", "none");
});

$("#soft48").hover(function(){
    $('#stag41').css("display", "block");
    $('#softimg42').css("display", "block");
},function(){
    $('#stag41').css("display", "none");
    $('#softimg42').css("display", "none");
});

$("#soft66").hover(function(){
    $('#stag41').css("display", "block");
    $('#softimg43').css("display", "block");
},function(){
    $('#stag41').css("display", "none");
    $('#softimg43').css("display", "none");
});
});
