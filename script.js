
function Start() {
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    var score1 = parseInt(document.getElementById("score1").value);
    var score2 = parseInt(document.getElementById("score2").value);
    var team1, team2, winner;
    var numberOfElementsInTheArray, numberOfElementsInTheArray2;
    var space = ' ';

function splitString(message1, space) {
    var arrayOfStrings = document.getElementById("message1").value.split(space);
    if (arrayOfStrings.length > 11){
        alert("The number of players in a single team cannot be more than 11.");
        return 0;
    }
    numberOfElementsInTheArray = console.log(arrayOfStrings.join(' / '));
  }


function splitString2(message2, space) {
    var arrayOfStrings2 = document.getElementById("message2").value.split(space);
    if (arrayOfStrings2.length > 11){
        alert("The number of players in a single team cannot be more than 11.");
        return 0;
    }
    numberOfElementsInTheArray2 = console.log(arrayOfStrings2.join(' / '));
  }


console.log('1-st Comand team: ')
console.log(splitString())
console.log('=============')
console.log('2-nd Comand team: ')
console.log(splitString2())
console.log('=============')


if (score1 + score2 > 7 || score1 < 0 || score2 < 0){

    console.log('The combined number of goals cannot be greater than 7, try again');
    return 0;
}

else {
function goals1(score1){
    if (score1 == 0){
        console.log('(0)');
        team1 = "(0)";}
    else if (score1 == 1){
        console.log('(1)');
        team1 = "(1)";}
    else if (score1 == 2){
        console.log('(1 1), (2)');
        team1 = "(1 1), (2)"; }
    else if (score1 == 3){
        console.log('(1 1 1), (1 2), (3)');
        team1 = "(1 1 1), (1 2), (3)";}
    else if (score1 == 4){
        console.log('(1 1 1 1), (1 1 2), (2 2), (1 3), (4)');
        team1 = "(1 1 1 1), (1 1 2), (2 2), (1 3), (4)";}
    else if (score1 == 5){
        console.log('(1 1 1 1 1), (1 1 1 2), (1 2 2), (2 3), (1 1 3), (1 4), (5)');
        team1 = "(1 1 1 1 1), (1 1 1 2), (1 2 2), (2 3), (1 1 3), (1 4), (5)";}
    else if (score1 == 6){
        console.log('(1 1 1 1 1 1), (1 5), (1 1 4), (1 1 1 3), (1 1 1 1 2), (2 2 1 1), (2 2 2), (3 3), (1 2 3), (2 4), (6)');
        team1 = "(1 1 1 1 1 1), (1 5), (1 1 4), (1 1 1 3), (1 1 1 1 2), (2 2 1 1), (2 2 2), (3 3), (1 2 3), (2 4), (6)"; }
    else if (score1 == 7){
        console.log('(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (1 2 2 2), (1 3 3), (2 2 3), (2 4 1), (2 5), (3 4), (3 2 1 1)')
        team1 = "(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (1 2 2 2), (1 3 3), (2 2 3), (2 4 1), (2 5), (3 4), (3 2 1 1)"; }
    else {
        alert('The combined number of goals cannot be greater than 7');
    }
    }

function goals2(score2){
   
   if (score2 == 0){
            console.log('(0)');
            team2 = "(0)";}
        else if (score2 == 1){
            console.log('(1)');
            team2 = "(1)";}
        else if (score2 == 2){
            console.log('(1 1), (2)');
            team2 = "(1 1), (2)"; }
        else if (score2 == 3){
            console.log('(1 1 1), (1 2), (3)');
            team2 = "(1 1 1), (1 2), (3)";}
        else if (score2 == 4){
            console.log('(1 1 1 1), (1 1 2), (2 2), (1 3), (4)');
            team2 = "(1 1 1 1), (1 1 2), (2 2), (1 3), (4)";}
        else if (score2 == 5){
            console.log('(1 1 1 1 1), (1 1 1 2), (1 2 2), (2 3), (1 1 3), (1 4), (5)');
            team2 = "(1 1 1 1 1), (1 1 1 2), (1 2 2), (2 3), (1 1 3), (1 4), (5)";}
        else if (score2 == 6){
            console.log('(1 1 1 1 1 1), (1 5), (1 1 4), (1 1 1 3), (1 1 1 1 2), (2 2 1 1), (2 2 2), (3 3), (1 2 3), (2 4), (6)');
            team2 = "(1 1 1 1 1 1), (1 5), (1 1 4), (1 1 1 3), (1 1 1 1 2), (2 2 1 1), (2 2 2), (3 3), (1 2 3), (2 4), (6)"; }
        else if (score2 == 7){
            console.log('(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (1 2 2 2), (1 3 3), (2 2 3), (2 4 1), (2 5), (3 4), (3 2 1 1)')
            team2 = "(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (1 2 2 2), (1 3 3), (2 2 3), (2 4 1), (2 5), (3 4), (3 2 1 1)"; }
        else {
            alert('The combined number of goals cannot be greater than 7');
        }
} 

 goals1(score1)
 goals2(score2)
 alert(team1)
 alert(team2)

   if (score1 > score2){
      winner = "team 1 wins";
   }
   else if (score1 < score2){
       winner = "team 2 wins";
   }
   else {
       winner = "draw";
   }

   console.log('by match results, ' + winner);}
}
 