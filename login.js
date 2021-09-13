function validation(){
  var name = document.getElementById('usern').value.trim();
  var password=document.getElementById('pword').value.trim();
  var status;

if(document.getElementById("customRadioInline1").checked){



  if(name == "" || name == null){
    document.getElementById("name1").innerHTML = "*please enter username";
    status = false;
  }  else if (password == ""  || password.length > 9){
    document.getElementById("name1").innerHTML = "";
    document.getElementById("password").innerHTML = "*please enter password";
    status = false;
  } else  {
    document.getElementById("password").innerHTML = "";
    status = true;
    alert("Login successfully")
    window.open("admin.html");
    location.reload();
    return true; 
  }
}

else if(document.getElementById("customRadioInline2").checked){
  if(name == "" || name == null){
    document.getElementById("name1").innerHTML = "*please enter username";
    status = false;
  } else if (password ==""  || password.length > 9){
    document.getElementById("name1").innerHTML = "";
    document.getElementById("password").innerHTML = "*please enter password";
    status = false;
  } else {
    document.getElementById("password").innerHTML = "";
    status = true;
    alert("Login successfully")
    window.open("clglogin.html");
    location.reload();
    return true; 
  }
}
else if(document.getElementById("customRadioInline3").checked){
  if(name == "" || name == null){
    document.getElementById("name1").innerHTML = "*please enter username";
    status = false;
  } else if (password ==""  || password.length > 9){
    document.getElementById("name1").innerHTML = "";
    document.getElementById("password").innerHTML = "*please enter password";
    status = false;
  } else {
    document.getElementById("password").innerHTML = "";
    status = true;
    alert("Login successfully")
    window.open("stulogin.html");
    location.reload();
    return true; 
  }
}
return status;
}


