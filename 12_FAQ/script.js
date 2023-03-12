function faqclick(pos)
{
    document.getElementsByClassName("items")[pos].classList.toggle("active-items");
    document.getElementsByClassName("btn")[pos].classList.toggle("active-button");
    document.getElementsByClassName("text")[pos].classList.toggle("noactive");
}