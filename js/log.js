// ======================jq==========
 $(function(){

      $("#close").click(function(){
          
          $("#container1").css("display","none");
          $("#login").css("display","none");
      })
   
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
    if (tel=='17709829332' && pwd=='123456' && check.checked ) {
        alert("登陆成功");
    }else{
        alert("登陆失败");
    }
}