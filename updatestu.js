function registration() {
    var Firstname = document.getElementById('fname').value;
    var Lastname = document.getElementById('lname').value;
    var Username = document.getElementById('username1').value;
    var Password = document.getElementById('pword1').value;
    var Mobilenumber = document.getElementById('phoneno1').value;
    var Email = document.getElementById('email').value;
    var address = document.getElementById('add').value;
    var status;
    if (Firstname == "") {
        document.getElementById("firstname").innerHTML="* please enter collegename";
        status=false;
    }else {
        document.getElementById("firstname").innerHTML = ""
      
    }
    if (Lastname == "") {
        document.getElementById("lastname").innerHTML="* please enter collegename";
        status=false;
    }else {
        document.getElementById("lastname").innerHTML = ""
      
    }
    if (Username == "") {
        document.getElementById("uname1").innerHTML="* please enter username";
        status=false;
    }else if(Username.length <= 4 ){
        document.getElementById("uname1").innerHTML = "* Username must be atleast 5 Characters"
        status=false;
    } else if(Username.length > 14){
        document.getElementById("uname1").innerHTML = "* Username should not exceeds 14 Characters"
        status=false;
    } else {
        document.getElementById("uname1").innerHTML = "";
       
    }  

    if (Password == "") {
        document.getElementById("pass1").innerHTML="* please enter password";
        status=false;
    }else if(Password.length <= 4){
        document.getElementById("pass1").innerHTML = "* Password must be atleast 5 Characters"
        status=false;
    } else if(Password.length > 10){
        document.getElementById("pass1").innerHTML = "* Password should not exceeds 10 Characters"
        status=false;
    } else {
        document.getElementById("pass1").innerHTML = "";
        
       
    }   
    const phoneno = /^\d{10}$/

    if (Mobilenumber == "") {
        document.getElementById("pnum1").innerHTML="* please enter phonenumber";
        status=false;
    }  else if(phoneno.test( Mobilenumber)){
        document.getElementById("pnum1").innerHTML = "";             
    } 
     else {
        document.getElementById("pnum1").innerHTML = "* Invalid Phone Number";
         status=false;
     }
     const emailValidation = /\S+@\S+\.\S+/;
     
     if(Email == "")  {
        document.getElementById("mail").innerHTML="* please enter valid Email address";
        status=false;
     }
    
    else if(emailValidation.test(Email)) {
        document.getElementById("mail").innerHTML = "";
        
     }
     else{
        document.getElementById("mail").innerHTML = "Invalid Emailaddres";
        
     }

    if (address== "") {
        document.getElementById("addr1").innerHTML="* please enter address";
        status=false;
    }else {
        document.getElementById("addr1").innerHTML = "";       
    }
    if(!Firstname == "" && !Lastname == "" && !Username == "" && !Password == "" && !Mobilenumber == "" && !Email == "" && !address== "" ){
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("uname1").value="";
        document.getElementById("pass1").value="";
        document.getElementById("pnum1").value="";
        document.getElementById("mail").value="";
        document.getElementById("addr1").value="";
         status=true;
         alert("Registered successfully")
         location.reload();    
          return true; 
    }
}




function resets(){
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("uname1").value="";
    document.getElementById("pass1").value="";
    document.getElementById("pnum1").value="";
    document.getElementById("mail").value="";
    document.getElementById("addr1").value="";


    document.getElementById("firstname").innerHTML="";
    document.getElementById("lastname").innerHTML="";
    document.getElementById("uname1").innerHTML="";
    document.getElementById("pass1").innerHTML="";
    document.getElementById("pnum1").innerHTML="";
    document.getElementById("mail").innerHTML="";
    document.getElementById("addr1").innerHTML="";


    document.getElementById("clname").innerHTML="";
    document.getElementById("uname").innerHTML="";
    document.getElementById("pass").innerHTML="";
    document.getElementById("addr").innerHTML="";
    document.getElementById("pnum").innerHTML="";




        document.getElementById("clname").value="";
        document.getElementById("uname").value="";
        document.getElementById("pass").value="";
        document.getElementById("addr").value="";
        document.getElementById("pnum").value="";    
}






