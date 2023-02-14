var step;
var valor;



function load()
{
    step = 1;
    valor = 0;
}

function previous()
{
    var line = document.getElementsByClassName("line")[0]; 
    var numbers = document.getElementsByClassName("number");
    if(step > 1)
    {
        valor = valor - 33.33333;
        line.style.width = valor + "%";
        numbers[step-1].style.borderColor = "gray";
        step--;
    }
    update();
}

function next1()
{
    var line = document.getElementsByClassName("line")[0]; 
    var numbers = document.getElementsByClassName("number");
    if (step < 4)
    {
        
        valor = valor + 33.33333;
        line.style.width = valor + "%";
        numbers[step].style.borderColor = "rgb(119, 218, 204)";
        step++;
    }
    update();
}

function update()
{
    var previous = document.getElementById("previous");
    var next = document.getElementById("next");
    if(step == 1)
    {
        previous.disabled = true;
        previous.style.cursor = "not-allowed";
        next.disabled = false;
        next.style.cursor = "pointer";
    }
    else if(step == 4)
    {
        previous.disabled = false;
        previous.style.cursor = "pointer";
        next.disabled = true;
        next.style.cursor = "not-allowed";
    }
    else
    {
        previous.disabled = false;
        previous.style.cursor = "pointer";
        next.disabled = false;
        next.style.cursor = "pointer";
    }
}