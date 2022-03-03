// ======================jq==========
$(function(){

    $("#close").click(function(){
        
        $("#container1").css("display","none");
        $("#login").css("display","none");
    });




    // blur方法，调用ajax传值判断电话号是否重复
    $("#body_1_form_tel_input").blur(function(){
      let url1=$("#body_1_form_tel_input").val()=="17709829332"?'../json/checktel1.json':'../json/checktel2.json';
          console.log($("#body_1_form_tel_input").val());
      $.ajax({
        url:url1,
        success:function(response){
            if (response=="same") {
                alert("已存在，请重新输入")
            }else{      
            }
        }
      });
    });
 
})

// =================js=================


function checkpwd() {
  let body_1_form_password_input=document.getElementById("body_1_form_password_input").value;
 
      if(body_1_form_password_input==''){
          document.getElementById("body_1_form_btn").style.backgroundColor="gainsboro";
          console.log("!!");
      }else{
          document.getElementById("body_1_form_btn").style.backgroundColor="#16e067"
          console.log("111");
      }
  
}
function checktel(){
  //  /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
  let body_1_form_tel_input=document.getElementById("body_1_form_tel_input").value;
  let checkvalue=new RegExp( /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/);
 
  if(body_1_form_tel_input==''){
       document.getElementById("body_1_form_tel_check").style.display='none';
        
  }else if(!checkvalue.test(body_1_form_tel_input)){
        document.getElementById("body_1_form_tel_check").style.display='block';
  }
  else{
      document.getElementById("body_1_form_tel_check").style.display='none';  
  }
}

setInterval("checkpwd()",1000);
setInterval("checktel()",1000);

function check(){
    let tel=document.getElementById("body_1_form_tel_input").value;
    let pwd=document.getElementById("body_1_form_password_input").value;
    let check=document.getElementById("checkbox");
    if (tel!='17709829332' && pwd!='' && check.checked ) {
        alert("注册成功");
    }else{
        alert("注册失败");
    }
}