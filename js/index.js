let imgs;
var nums=0;
let i=0;
     function getimg() {
         imgs=document.getElementsByName("body_top_lunbo_img");
         imgs[0].style.display='block';
         nums=document.getElementsByName('body_top_lunbo_img_ul_li');
         nums[0].style.background='rgba(black,1)';
     }
     
     function showImg() {
         i++;
         if(i>=imgs.length){
             i=0;
         }
       getpic(i);
     }
     function getpic(index) {//和下面方法的index非同义，形参而已
           for(let j=0;j<imgs.length;j++){
            //  console.log(imgs[j]);
             imgs[j].style.display="none";
             nums[j].style.background='rgba(black,0.5)';
             nums[j].style.fontSize='16px';
             nums[j].style.color='grey';
            
         }
         imgs[i].style.display="block";
         nums[i].style.background='rgba(black,1)'; 
         nums[i].style.fontSize='26px';
         nums[i].style.color='white';
         
     }
     let s1=setInterval("showImg()", 2000);
      function stop() {
          clearInterval(s1);
      }
      function start() {
       s1=setInterval("showImg()", 2000);
      }
     function turn(th) {
         let index;
         for(let j=0;j<nums.length;j++){
             if(nums[j].innerHTML==th.innerHTML){
                 index=j;
                 break;
             }
         }
         i=index;
         getpic(index);
     }
     function left() {
         i--;
         if(i<0){
             i=imgs.length-1;
         }
       getpic(i);
        }
     
     function right() {
        i++;
        if(i>=imgs.length){
             i=0;
         }
       getpic(i);
     }
    //  以上为轮播图效果------------------------
    function show_getinput() {
         let  div1=document.getElementsByClassName("header_hide_1_div_div");
        for(let i=0;i<div1.length;i++){
             
            if(parseInt(div1[i].innerHTML)<=3){  
               div1[i].style.backgroundColor='green';
               div1[i].style.borderRadius='5px'
            }
        }
    }
    function showlog(){
        document.getElementById("login").style.display='block';
    }
    function showjoin(){
        document.getElementById("joinin").style.display='block';
    }
   function toindex3(){
       window.location.href="index3.html";
   }
   
    window.onscroll=function(){
        if(window.pageYOffset>=140){
            document.getElementById("header").style='position: fixed;top:0;left:0;background-color:black';
        }else{
            document.getElementById("header").style='position: absolute;top:0;left:0';
        }
    }
      
    
//JQ====================================


//============搜索框下面的隐藏块========
    $(function(){
        $("#header_mid_1_input").click(function(){
            $("#header_mid_1_input").css("outline","none");
            if($("#header_hide_1").css("display")=='none'){
                $("#header_hide_1").css("display","block");

            }else{
                $("#header_hide_1").css("display","none");
            }
            console.log($("#header_hide_1").css("border"));
        });

      $("#header_right_div1").hover(
          function(){
            $("#header_hide_2").show();
          },
          function(){
            $("#header_hide_2").hide();
          
      
      });
    //   $("#header_right_div1").mouseover(function(){
    //     if($("#header_hide_2").css("display")=='block'){
    //         $("#header_hide_2").css("display","none");
    //      }
        
    //   });
      $("#header_right_div2").hover(
          function(){
            $("#header_hide_3").show();
          },
          function(){
            $("#header_hide_3").hide();
            

                // $("#header_hide_3").empty();

                // $.ajax({
                //     url:'imgs.txt',
                //     success:function(response){
                //         let $image=$.parseJSON(response);
                //         $.each($image,function(){
                //             let imgs=$(this)[0];
                            
                //             $ul=$("<ul>"+"</ul>");
                //             $li=$("<li>"+"</li>");
                //             $img=$("<img>");

                //             $img.attr('src',imgs.imgsrc);

                //             $ul.append($li);
                //             $li.append($img);
                //         })   
                //     }
                // })
      }
      );
      $("#header_right_div6").mouseover(function(){
         if($("#header_hide_4").css("display")=='none'){
        $("#header_hide_4").css("display","block");
       }else{
        $("#header_hide_4").css("display","none");
       }  ;
      
    
      });

      
    //   $.ajax({
         
    //     url:'index.txt',
    //     success:function(response){
    //               var $image=$.parseJSON(response);
    //               $.each($image,function(){
    //                   var imgs=$(this)[0];

    //           $ul=$("<ul>");
    //           $li1=$("<li>");
    //           $li2=$("<li>");
    //           $li3=$("<li>");
    //           $li4=$("<li>");
    //           $li5=$("<li>");


    //           $img=$("<img>");
    //           $p=$("<p>");
    //           $p1=$("<p>");
    //           $img.attr('src',imgs.img);
    //           $p.html(imgs.p);
    //           console.log($p);
    //           $p1.html(imgs.p1);
    //          $img.addClass("content_3_left_ul_li_img");
    //           $li1.append($img);
    //           $li1.append($p);
    //           $li1.append($p1);
    //           $ul.append($li1);
    //           $("#content_3_left").append($ul);
             
    //                   })   
    //               }
    
    // }); 

})
