var previousnum = 0;


function expand(num)
{
    if(previousnum != num)
    {
        var elements = document.getElementsByClassName("cards");
        var heading3 = document.getElementsByTagName("h3");

        for(let i=0;i<elements.length;i++)
        {
            elements[i].style.width = "15vh";
            heading3[i].style.display = "none";
        }

        elements[num].style.width = "115vh";

        window.setTimeout(timer, 500, heading3[num]);
    }
    
    previousnum = num;
}


function timer(element) {
    element.style.display = "block";
}