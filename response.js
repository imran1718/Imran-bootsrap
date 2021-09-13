function response1(){
    var feedback = document.getElementById("res").value;
    var status;
   
    if(feedback  == "" || feedback.length < 1){
        document.getElementById("back").innerHTML="* Please enter response";
        status=false;
    }
   
    else{
        document.getElementById("back").innerHTML="";
    }
    if(!feedback == "" && !feedback.length < 10){
        document.getElementById("back").innerHTML ="";
        status=true;
        alert(" response Send successfully")
        location.reload();    
         return true; 

    }
}