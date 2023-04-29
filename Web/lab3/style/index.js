function func(){
    var x = document.getElementById("password-input");
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
    var y = document.getElementById("password-confirm"); 
    if(y.type === "password"){
        y.type = "text";
    }
    else{
        y.type = "password";
    }
}