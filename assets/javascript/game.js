$(document).ready(function() {
var wins = 0;
var losses = 0;
var addup = 0;
var totalScore = 0;

var number = (Math.floor(Math.random() * 100) + 49);
$("#number").html(number);

function reset(){
addup = 0;
totalScore = 0;
number = (Math.floor(Math.random() * 100) + 49);
$("#number").html(number);
$("#totalscore").html("Total Score: " + totalScore);
$("#ruby").attr("value", Math.floor(Math.random() *5) + 1);
$("#topaz").attr("value", Math.floor(Math.random() *10) + 5);
$("#amber").attr("value", Math.floor(Math.random() *20) + 10);
$("#diamond").attr("value", Math.floor(Math.random() *30) + 20);
}

function calculateTotal() {
    if (totalScore == number) {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    }
    
    if ( totalScore > number) {
    losses++;
    $("#losses").html("Losses: " + losses);
    reset();
    
    }
    }




$("#ruby").on("click", function(){
    var ruby = $(this).val();
    //addup = addup + parseInt(ruby);
    totalScore = totalScore + parseInt(ruby);
    $("#totalscore").html("Total Score: " + totalScore);
    calculateTotal();

})

$("#topaz").on("click", function(){
    var topaz = $(this).val();
    totalScore = totalScore + parseInt(topaz);
    $("#totalscore").html("Total Score: " + totalScore);
    calculateTotal();

})

$("#amber").on("click", function(){
    var amber = $(this).val();
    totalScore = totalScore + parseInt(amber);
    $("#totalscore").html("Total Score: " + totalScore);
    calculateTotal();


})
$("#diamond").on("click", function(){
    var diamond = $(this).val();
    totalScore = totalScore + parseInt(diamond);
    $("#totalscore").html("Total Score: " + totalScore);
    calculateTotal();


})

$("#resetbtn").on("click", function(){
    wins = 0;
    losses = 0;
    reset();
    $("#wins").html("Wins: " );
    $("#losses").html("Losses: ");
    
    
    });
});

