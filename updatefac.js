function updatefac(){
    var Name1 = document.getElementById("name1").value;
    var Qualification1 = document.getElementById("quali1").value;
    var Experience1 = document.getElementById("expr1").value;
    var Skill1 = document.getElementById("set1").value;
    var status;
    if(Name1 == "" )
    {
        document.getElementById("fac1").innerHTML = "* Please enter your name";
        status = false;
    }    else{
        document.getElementById("fac1").innerHTML ="";
    } 
    if(Qualification1 == "")
    {
        document.getElementById("qual1").innerHTML="* Please enetr your Qualification";
        status=false;
    }else{
        document.getElementById("qual1").innerHTML="";
    }
    if(Experience1 == "" ){
        document.getElementById("exp1").innerHTML="* Please enter your Experience";
        status=false;
    }
    else{
        document.getElementById("exp1").innerHTML="";
    }
    if(Skill1 == "" ){
        document.getElementById("Skill1").innerHTML="* Please enter your Skill";
        status=false;
    }
    else{
        document.getElementById("Skill1").innerHTML="";
    }
    if(!Name1 == "" && !Qualification1 == "" && !Experience1 == "" && !Skill1 == "" ){
        document.getElementById("fac1").innerHTML ="";
        document.getElementById("qual1").innerHTML="";
        document.getElementById("exp1").innerHTML="" ;
        document.getElementById("Skill1").innerHTML="";
        status=true;
        alert(Name1  +  " Updated successfully")
        location.reload();    
         return true; 

    }
}
function reset1(){
    document.getElementById("fac1").value ="";
    document.getElementById("qual1").value="";
    document.getElementById("exp1").value="";
    document.getElementById("Skill1").value="";


    document.getElementById("fac1").innerHTML ="";
    document.getElementById("qual1").innerHTML="";
    document.getElementById("exp1").innerHTML="";
    document.getElementById("Skill1").innerHTML="";



    document.getElementById("name1").innerHTML;
    document.getElementById("quali1").innerHTML;
    document.getElementById("expr1").innerHTML;
    document.getElementById("set1").innerHTML;


    document.getElementById("name1").value;
    document.getElementById("quali1").value;
    document.getElementById("expr1").value;
    document.getElementById("set1").value;
    
}
