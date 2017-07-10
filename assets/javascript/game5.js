/*This is where the variable for the four gems are
set to a random value, the variable for the array (to push
those variables into, the sum of the random variables 
generated when clicked on each gym, the number to match to
and the users wins and losses)*/
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

    /*This section is basically saying
    when I click on the image for #gem1 (per se)
    the on click function is going to fire off the
    genRanNum1 (generate random number function)*/
    $('#gem1').on('click', genRanNum1);
    $('#gem2').on('click', genRanNum2);
    $('#gem3').on('click', genRanNum3);
    $('#gem4').on('click', genRanNum4);
});
/*This function's purpose is to set a random number that youe 
total score needs to match and if your total score is above
it, you lose*/
function setBigNumber() {
    $('#demo').html(bigNumber);
}

// This is the function for the first gem
function genRanNum1() {
    addArray.push(RanNumGem1);
    sum = sum + RanNumGem1;
    updateTotalDiv();
    displayArray();
    testIfLimitExceeded();
}

// This is the function for the second gem
function genRanNum2() {
    addArray.push(RanNumGem2);
    sum = sum + RanNumGem2;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// This is the function for the third gem
function genRanNum3() {
    addArray.push(RanNumGem3);
    sum = sum + RanNumGem3;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// This is the function for the fourth gem
function genRanNum4() {
    addArray.push(RanNumGem4);
    sum = sum + RanNumGem4;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

//This function allows you to see the array the numbers are pushed to the the console
function displayArray() {
    console.log(addArray);
}

/*This function updates the total score by calling the "scoreTotal" id and 
basically saying that total is equal to the sum*/
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
