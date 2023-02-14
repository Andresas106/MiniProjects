var interval;
var count = 0;
var opacity = 100;

function load()
{
    var image = document.getElementsByClassName("image")[0];
    var loaderElement = document.getElementsByClassName("loader")[0];
    image.style.filter = "blur(0)";
    interval = setInterval(loader, 20, loaderElement);
    
        
}

function loader(loaderElement)
{
    if(count == 101)
    {
        clearInterval(interval);
    }
    else
    {
        loaderElement.innerHTML = count + "%";
        count++;
        loaderElement.style.opacity = opacity + "%";
        opacity--;
    }
    
}