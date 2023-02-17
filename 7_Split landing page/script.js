function mousein(element)
{
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];

    if(element === left)
    {
        left.classList.add("active");
        right.classList.add("not-active");
    }else if(element === right)
    {
        left.classList.add("not-active");
        right.classList.add("active");
    }
}

function mouseoff(element)
{
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];

    if(element === left)
    {
        left.classList.remove("active");
        right.classList.remove("not-active");
    }else if(element === right)
    {
        left.classList.remove("not-active");
        right.classList.remove("active");
    }
}