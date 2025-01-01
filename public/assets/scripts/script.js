let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let bt4 = document.getElementById('bt4');
let bt5 = document.getElementById('bt5');
let bt6 = document.getElementById('bt6');
let bt7 = document.getElementById('bt7');
let bt8 = document.getElementById('bt8');
let bt9 = document.getElementById('bt9');

var test = true; //A boolean variable to toggle between X and O
 
function getChar()
{
    if(test)
    {
        test = false;
        return "X";
    }
    test = true;
    return "O";
}

function isElementNotEmty(bt)
{
    return bt.value !== "";
}

function isAllElementsNotEmpty()
{
    return isElementNotEmty(bt1) && isElementNotEmty(bt2) && isElementNotEmty(bt3) && 
                isElementNotEmty(bt4) && isElementNotEmty(bt5) && isElementNotEmty(bt6) &&
                isElementNotEmty(bt7) && isElementNotEmty(bt8) && isElementNotEmty(bt9)
}

function fill(bt)
{
    bt.value = getChar();
    bt.disabled = true;
    if(isAllElementsNotEmpty())
    {
        alert("End game");
    }
}

bt1.onclick = function()
{
    fill(bt1);
}

bt2.onclick = function()
{
    fill(bt2);
}

bt3.onclick = function()
{
    fill(bt3);
}

bt4.onclick = function()
{
    fill(bt4);
}

bt5.onclick = function()
{
    fill(bt5);
}

bt6.onclick = function()
{
    fill(bt6);
}

bt7.onclick = function()
{
    fill(bt7);
}

bt8.onclick = function()
{
    fill(bt8);
}

bt9.onclick = function()
{
    fill(bt9);
}