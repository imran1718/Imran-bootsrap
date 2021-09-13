function sendreq(){
    var Name = document.getElementById("name").value;
    var College = document.getElementById("clg").value;
    var Request = document.getElementById("req").value;
    var status;
    if(Name == "" )
    {
        document.getElementById("nam").innerHTML = "* Please enter your name";
        status = false;
    }    else{
        document.getElementById("nam").innerHTML ="";
    } 
    if(College == "")
    {
        document.getElementById("clage").innerHTML="* Please enter your college name";
        status=false;
    }else{
        document.getElementById("clage").innerHTML="";
    }
    if(Request == "" || Request.length < 10){
        document.getElementById("request").innerHTML="* Please enter Request";
        status=false;
    }
    else{
        document.getElementById("request").innerHTML="";
    }
    if(!Name == "" && !College == "" && !Request == "" ){
        document.getElementById("nam").innerHTML ="";
        document.getElementById("clage").innerHTML="";
        document.getElementById("request").innerHTML="";
        status=true;
        alert(Name  +  " Request Send successfully")
        location.reload();    
         return true; 

    }
}
function reset(){
    document.getElementById("nam").value ="";
    document.getElementById("clage").value="";
    document.getElementById("request").value="";

        document.getElementById("nam").innerHTML ="";
        document.getElementById("clage").innerHTML="";
        document.getElementById("request").innerHTML="";

        

        document.getElementById("name").innerHTML="";
        document.getElementById("clg").innerHTML="";
        document.getElementById("req").innerHTML="";
 


        document.getElementById("name").value="";
        document.getElementById("clg").value="";
        document.getElementById("req").value="";
 
}