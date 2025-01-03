//const Game = require('./models/Game.js');
//started time
let date = new Date();

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

function equal(bt, char)
{
    return bt.value === char;
}
function win(char)
{
    possibilty1 = equal(bt1, char) && equal(bt2, char) && equal(bt3, char);
    possibilty2 = equal(bt1, char) && equal(bt4, char) && equal(bt7, char);
    possibilty3 = equal(bt7, char) && equal(bt8, char) && equal(bt9, char);
    possibilty4 = equal(bt9, char) && equal(bt6, char) && equal(bt3, char);
    possibilty5 = equal(bt3, char) && equal(bt5, char) && equal(bt7, char);
    possibilty6 = equal(bt1, char) && equal(bt5, char) && equal(bt9, char);

    return possibilty1 || possibilty2 || possibilty3 || possibilty4 || possibilty5 
            || possibilty6
}

function disabledAll()
{
    bt1.disabled = true;
    bt2.disabled = true;
    bt3.disabled = true;
    bt4.disabled = true;
    bt5.disabled = true;
    bt6.disabled = true;
    bt7.disabled = true;
    bt8.disabled = true;
    bt9.disabled = true;
}

function showWinnerAlert(winner) 
{
    Swal.fire
    (
        {
            title: 'Game Over!',
            text: `${winner} wins!`,
            icon: 'success',
            confirmButtonText: 'Play Again'
        }
    ).
    then
    (
        () => 
        {
            location.reload(); // Refresh the page
        }
    );
}

function fill(bt)
{
    bt.value = getChar();
    bt.disabled = true;
    game = new Game();
    //verify who is the winner
    if(win("X"))
    {
        game.setPlayed_at(date);
        game.setResult('X');
        game.save();
        //alert("X player won");
        showWinnerAlert('X'); 
        disabledAll();
    }
    else if(win("O"))
    {
        game.setPlayed_at(date);
        game.setResult('O');
        game.save();
        //alert("O player won");
        showWinnerAlert('O');
        disabledAll();
    }

    if(isAllElementsNotEmpty())
    {
        game.setPlayed_at(date);
        game.setResult('Draw');
        game.save();
        //alert("Draw");
        showWinnerAlert('Draw');
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

let popup = document.getElementById('popup');
let btConsultLeadboard = document.getElementById('btConsultLeadboard');
let btClose = document.getElementById('btClose');

function populateLeaderboardTable(data) 
{
    const tableBody = document.querySelector('#leaderboardTable tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    // Loop through each entry in the data array and create table rows
    data.forEach
    (
        item => 
        {
            const row = document.createElement('tr');
            const resultCell = document.createElement('td');
            const playedAtCell = document.createElement('td');

            // Add data to cells
            resultCell.textContent = item.result;   // Assume the data has a "result" field
            playedAtCell.textContent = item.played_at; // Assume the data has a "playedAt" field

            // Append cells to the row
            row.appendChild(playedAtCell);
            row.appendChild(resultCell);
            
            // Append the row to the table body
            tableBody.appendChild(row);
        }
    );
  }

function openPopup()
{
    popup.classList.add('open-popup');
}

function closePopup()
{
    popup.classList.remove('open-popup');
}

btConsultLeadboard.onclick = function()
{
    const game = new Game();
    game.getLeadboard()
    .then
        (
            data => 
            {
                populateLeaderboardTable(data); // Populate the table with fetched data
            }
        )
      .catch
      (
        error => 
        {
            console.error('Error in fetching leaderboard:', error);
        }
    );
    openPopup();
}

btClose.onclick = function()
{
    closePopup();
}
