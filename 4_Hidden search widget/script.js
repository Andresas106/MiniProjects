var num;

function load()
{
    num = 0;
}

function search()
{
    
    var search = document.getElementById("search");

    search.classList.toggle("active");

    if(num == 0)
    {
        search.focus();
        num = 1;
    }
    else
    {
        search.blur();
        num = 0;
    }
    
}