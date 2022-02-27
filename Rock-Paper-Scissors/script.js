var images = [
    "./images/refresh.png",
    "./images/rock.PNG",
    "./images/paper.PNG",
    "./images/scissors.PNG",
]

var scoreUser = 0;
var scoreCPU = 0;

document.documentElement.style.setProperty('--result','none');


function game(move) {
    var image;
    var random;
    if(scoreCPU<3 && scoreUser<3)
    {
        document.getElementById("user-image").src = images[move];
        random = Math.random() * (3)+1;
        random = Math.floor(random);
        document.getElementById("cpu-image").src = images[random];
        document.getElementById("cpu-image").alt = random;

        switch(true){
            case (move === 1 && random === 3):
                scoreUser++;
                break;
            case (move === 2 && random === 1):
                scoreUser++;
                break;
            case (move === 3 && random === 2):
                scoreUser++;
                break;
            case(move === random):
                break;
            default:
                scoreCPU++;
                break;
        }

        //UPDATE SCORE BOARD
        document.getElementById("user-score").innerHTML = "SCORE: " + scoreUser;
        document.getElementById("cpu-score").innerHTML = "SCORE: " + scoreCPU;

    }
    

    //CHECK FOR WINNER
    if(scoreUser === 3 || scoreCPU === 3)
    {
        if (scoreCPU > scoreUser){
            document.getElementById("game-result-p").innerHTML = "CPU WINS";
        }
        else if(scoreUser > scoreCPU){
            document.getElementById("game-result-p").innerHTML = "USER WINS";
        }
        else{
            document.getElementById("game-result-p").innerHTML = "DRAW";
        }
        document.documentElement.style.setProperty('--result','flex');
    }

    

}

function reset(){

    document.getElementById("user-image").src = images[0];
    document.getElementById("cpu-image").src = images[0];
    scoreUser = 0;
    scoreCPU = 0;
    document.getElementById("user-score").innerHTML = "SCORE: " + scoreUser;
    document.getElementById("cpu-score").innerHTML = "SCORE: " + scoreCPU;
    document.documentElement.style.setProperty('--result','none');

}