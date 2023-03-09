var api = "https://v2.jokeapi.dev/joke/Any";
var question = "";
var response = "";


function loadjokeapi()
{
    var questionh1 = document.getElementById("question");
    var responseh1 = document.getElementById("response");
    
    questionh1.innerHTML = "";

    fetch(api)
    .then((info) => info.json())
    .then((item) => {
        if(`${item.type}` == "twopart")
        {
            question = `${item.setup}`;
            response = `${item.delivery}`;
            questionh1.innerHTML = question;
        }
        else
        {
            response = `${item.joke}`;
            
        }
        
        responseh1.innerHTML = response;
        
    });
}


function load()
{
   loadjokeapi();
}

function clickb()
{
    loadjokeapi();
}