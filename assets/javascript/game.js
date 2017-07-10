//VARIABLES Define global variables and set defaults
var RanNumGem1 = Math.floor(Math.random() * 12 + 1);
var RanNumGem2 = Math.floor(Math.random() * 12 + 1);
var RanNumGem3 = Math.floor(Math.random() * 12 + 1);
var RanNumGem4 = Math.floor(Math.random() * 12 + 1);
var addArray = [];
var sum = 0;
var bigNumber = Math.floor((Math.random() * (120 - 1)) + 19);
var wins = 0;
var losses = 0;




$(document).ready(function() {

    setBigNumber();

    // THIS CALLS THE FUNCTIONS
    $('#gem1').on('click', GenRanNumGem1);
    $('#gem2').on('click', GenRanNumGem2);
    $('#gem3').on('click', GenRanNumGem3);
    $('#gem4').on('click', GenRanNumGem4);
});

function setBigNumber() {
    $('#demo').html(bigNumber);
}

// THIS IS THE RED GEM
function GenRanNumGem1() {
    addArray.push(RanNumGem1);
    sum = sum + RanNumGem1;
    updateTotalDiv();
    displayArray();
    testIfLimitExceeded();
}

// THIS IS THE BLUE GEM
function GenRanNumGem2() {
    addArray.push(RanNumGem2);
    sum = sum + RanNumGem2;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// THIS IS THE YELLOW GEM
function GenRanNumGem3() {
    addArray.push(RanNumGem3);
    sum = sum + RanNumGem3;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// THIS IS THE GREEN GEM
function GenRanNumGem4() {
    addArray.push(RanNumGem4);
    sum = sum + RanNumGem4;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

function displayArray() {
    console.dir(addArray);
}

function updateTotalDiv() {
    document.getElementById("scoreTotal").innerHTML = sum;
}

function resetGame() {
    RanNumGem1 = Math.floor(Math.random() * 12 + 1);
    RanNumGem2 = Math.floor(Math.random() * 12 + 1);
    RanNumGem3 = Math.floor(Math.random() * 12 + 1);
    RanNumGem4 = Math.floor(Math.random() * 12 + 1);
    addArray = [];
    sum = 0;
    bigNumber = Math.floor((Math.random() * (120 - 1)) + 19);
}

function testIfLimitExceeded() {
    if (sum > bigNumber) {
        console.log("You lose!");
        losses++;
        $("#losses").html(losses);
        resetGame();
        updateTotalDiv();
        setBigNumber();
    } else if (sum === bigNumber) {
        console.log("You WIN!");
        wins++;
        $("#wins").html(wins);
        resetGame();
        updateTotalDiv();
        setBigNumber();
    }
}
