function load()
{
    var elementsEmail = document.getElementsByClassName("elementsEmail");
    var num=0;
    for(let i=0;i<elementsEmail.length;i++)
    {

        elementsEmail[i].style.transitionDelay = num + "ms";
        num = num + 60;
    }

    var elementsPassw = document.getElementsByClassName("elementsPassw");
    num = 0;
    for(let i=0;i<elementsPassw.length;i++)
    {
        elementsPassw[i].style.transitionDelay = num + "ms"
        num = num + 60;
    }
}


function focusEl(element)
{
    var inputemail = document.getElementsByClassName("inputemail")[0];
    var inputpassw = document.getElementsByClassName("inputpassw")[0];

    if(element === inputemail)
    {
        var elementsEmail =document.getElementsByClassName("elementsEmail");
        for(let i=0;i<elementsEmail.length;i++)
        {
            elementsEmail[i].style.transform = "translateY(-100%)";
        }
    }
    else if(element === inputpassw)
    {
        
        var elementsPassw = document.getElementsByClassName("elementsPassw");
        for(let i=0;i<elementsPassw.length;i++)
        {
            elementsPassw[i].style.transform = "translateY(-100%)";
        }
    }
}

function unfocus(element)
{
    var inputemail = document.getElementsByClassName("inputemail")[0];
    var inputpassw = document.getElementsByClassName("inputpassw")[0];

    if(element === inputemail)
    {
        if(inputemail.value.length == 0)
        {
            var elementsEmail =document.getElementsByClassName("elementsEmail");
            for(let i=0;i<elementsEmail.length;i++)
            {
                elementsEmail[i].style.transform = "translateY(0)";
            }
        }
        
    }
    else if(element === inputpassw)
    {
        if(inputpassw.value.length == 0)
        {
            var elementsPassw = document.getElementsByClassName("elementsPassw");
            for(let i=0;i<elementsPassw.length;i++)
            {
                elementsPassw[i].style.transform = "translateY(0)";
            }
        }
        
    }
}