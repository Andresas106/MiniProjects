function load()
{
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}

function scrolling()
{
    var boxes = document.getElementsByClassName("box");
    var heightwin = window.innerHeight;

    for(let i=0;i<boxes.length;i++)
    {
        var boxpos = boxes[i].getBoundingClientRect().top + 100;

        if(heightwin > boxpos)
        {
            boxes[i].classList.add("show");
        }
        else
        {
            boxes[i].classList.remove("show");
        }
    }
}