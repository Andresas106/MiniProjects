function keyPressed(e)
{
    document.getElementsByClassName("load")[0].style.display = "none"
    document.getElementsByClassName("keys")[0].style.display = "flex";


    console.log(e.code);

    var code = document.getElementById("code");
    
    var key = document.getElementById("key");
    var keycode = document.getElementById("keycode");

    code.innerHTML = e.code;
    keycode.innerHTML = e.keyCode;
    
    (e.key == " ") ? key.innerHTML = e.code: key.innerHTML = e.key;
    ;

}