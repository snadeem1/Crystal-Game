var wins = 0;
var losses = 0;
var addup = 0;
var totalScore = 0;

var number = (Math.floor(Math.random() * 50) + 49);
$("#number").html(number);

function reset(){
addup = 0;
totalScore = 0;
number = (Math.floor(Math.random() * 50) + 49);
$("#number").html("Random Number " + number);
$("#totalscore").html("Total Score " + totalScore);
}

function calculateTotal() {
    if (totalScore == number) {
        wins++;
        $("#wins").html("Wins " + wins);
        reset();
    }
    
    if ( totalScore > number) {
    losses++;
    $("#losses").html("Losses " + losses);
    reset();
    
    }
    }




$("#ruby").on("click", function(){
    var ruby = $(this).val();
    addup = addup + parseInt(ruby);
    totalScore = totalScore + addup;
    $("#totalscore").html("Total Score " + totalScore);
    calculateTotal();

})

$("#topaz").on("click", function(){
    var topaz = $(this).val();
    addup = addup + parseInt(topaz);
    totalScore = totalScore + addup;
    $("#totalscore").html("Total Score " + totalScore);
    calculateTotal();

})

$("#amber").on("click", function(){
    var amber = $(this).val();
    addup = addup + parseInt(amber);
    totalScore = totalScore + addup;
    $("#totalscore").html("Total Score " + totalScore);
    calculateTotal();


})
$("#diamond").on("click", function(){
    var diamond = $(this).val();
    addup = addup + parseInt(diamond);
    totalScore = totalScore + addup;
    $("#totalscore").html("Total Score " + totalScore);
    calculateTotal();


})

