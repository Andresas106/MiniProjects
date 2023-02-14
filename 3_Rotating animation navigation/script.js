function openclick()
{
    var elementopen = document.getElementsByClassName("open")[0];
    var close = document.getElementsByClassName("close")[0];
    elementopen.style.transform = "rotate(-90deg)";
    var value = 0.75;
    
    close.style.transform = "rotate(0deg)";
    close.style.left = "10%"

    var container = document.getElementsByClassName("container")[0];

    container.style.transform = "rotate(-15deg)";

    var menu = document.getElementsByClassName("menu");

    for(let i=0;i<menu.length;i++)
    {
        menu[i].style.transition = "transform " + value + "s linear";
        value = value + 0.25;
        menu[i].style.transform = "translateX(200%)";
        
    }
}

function closeclick()
{
    var elementopen = document.getElementsByClassName("open")[0];
    var close = document.getElementsByClassName("close")[0];
    elementopen.style.transform = "rotate(0deg)";
    
    
    close.style.transform = "rotate(90deg)";
    close.style.left = "0"

    var container = document.getElementsByClassName("container")[0];

    container.style.transform = "rotate(0deg)";

    var menu = document.getElementsByClassName("menu");

    for(let i=0;i<menu.length;i++)
    {
        menu[i].style.transition = "transform 0.5s linear";
        menu[i].style.transform = "translateX(-200%)";  
    }

}