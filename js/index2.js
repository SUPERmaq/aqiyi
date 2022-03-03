$(function(){

    $.ajax({
        url:'../json/index2.json',
            success:function(response){
                       $ul=response;
                      $.each($ul,function(){
                          var lis=$(this)[0];
    
                  $ul=$("<ul>");
                  $li1=$("<li>");
                  $li2=$("<li>");
                  $li3=$("<li>");
                  $li4=$("<li>");
                  $li5=$("<li>");
                 
                
                 
                  $div0=$("<div>");
                  $div1=$("<div>");
                  $div2=$("<div>");
                  $div3=$("<div>");
                  $div4=$("<div>");
                  $div5=$("<div>");
                  $div6=$("<div>");
                  $div7=$("<div>");
                  $div8=$("<div>");
                  $div9=$("<div>");
                  $div10=$("<div>");
                  $div11=$("<div>");
                  $div12=$("<div>");
                  $div13=$("<div>");
                  $div14=$("<div>");
                  $div15=$("<div>");
                  $div16=$("<div>");
                  $div17=$("<div>");
                  $div18=$("<div>");
                  $div19=$("<div>");
                 







                   $div0.html(lis.div0)
                   $div1.html(lis.div1);
                   $div2.html(lis.div2);
                   $div3.html(lis.div3);
                   $div7.html(lis.div7)
                   $div4.html(lis.div4);
                   $div5.html(lis.div5);
                   $div6.html(lis.div6);
                   $div8.html(lis.div8);
                   $div9.html(lis.div9);
                   $div10.html(lis.div10);
                   $div11.html(lis.div11);
                   $div12.html(lis.div12);
                   $div13.html(lis.div13)
                   $div14.html(lis.div14);
                   $div15.html(lis.div15);
                   $div16.html(lis.div16);
                   $div17.html(lis.div17)
                   $div18.html(lis.div18);
                   $div19.html(lis.div19);
                 
    
                 $div0.addClass("body1_div_div");
                 $div7.addClass("body1_div_div");
                 $div17.addClass("body1_div_div");
                 $div18.addClass("body1_div_div");
                 $div19.addClass("body1_div_div");
                 
                
                 $div1.addClass("left");
                 $div2.addClass("mid");
                 $div3.addClass("right");

                 $div4.addClass("left");
                 $div5.addClass("mid");
                 $div6.addClass("right");

                 $div8.addClass("left");
                 $div9.addClass("mid");
                 $div10.addClass("right");

                 $div11.addClass("left");
                 $div12.addClass("mid");
                 $div13.addClass("right");

                 $div14.addClass("left");
                 $div15.addClass("mid");
                 $div16.addClass("right");
                 
                 $li1.addClass("body1_div_ul_li");
                 $li2.addClass("body1_div_ul_li");
                 $li3.addClass("body1_div_ul_li");
                 $li4.addClass("body1_div_ul_li");
                 $li5.addClass("body1_div_ul_li");
                 


                
                   $li1 .append($div1).append($div2).append($div3);
                   $li2 .append($div4).append($div5).append($div6);
                   $li3 .append($div8).append($div9).append($div10);
                   $li4 .append($div11).append($div12).append($div13);
                   $li5 .append($div14).append($div15).append($div16);
                
                
                //   $ul.append($li1);
                //   $div.append($div0);
                //   $div.append($ul);
                 $("#ul").append($li2);
                  $("#ul1").append($li1);
                  $("#ul2").append($li3);
                  $("#ul3").append($li4);
                  $("#ul4").append($li5);
                 
                          })   
                      }
        
    });
   










})