var wins = 0;
var losses = 0;
var addup = 0;
var totalScore = 0;

var number = (Math.floor(Math.random() * 50) + 49);
$("#number").html(number);




$("#ruby").on("click", function(){
    var ruby = $(this).val();
    addup = addup + parseInt(ruby);
    $("#totalscore").html("Total Score " + addup);
    totalScore.push(addup);


})

$("#topaz").on("click", function(){
    var topaz = $(this).val();
    addup = addup + parseInt(topaz);
    $("#totalscore").html("Total Score " + addup);
    totalScore.push(addup);


})

$("#amber").on("click", function(){
    var amber = $(this).val();
    addup = addup + parseInt(amber);
    $("#totalscore").html("Total Score " + addup);
    totalScore.push(addup);


})
$("#diamond").on("click", function(){
    var diamond = $(this).val();
    addup = addup + parseInt(diamond);
    $("#totalscore").html("Total Score " + addup);
    totalScore.push(addup);


})

if (totalScore == number) {
    wins++;
    $("#wins").html("Wins " + wins);
}

else if ( totalScore > number) {
losses++;
$("#losses").html("Losses " + losses)

}
