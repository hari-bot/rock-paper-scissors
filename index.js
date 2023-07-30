var moves=["rock","paper","sissors"];
var playerScore=0;
var cpuScore=0;
var draw=0;

$(".btn").on("click",function(){   
    var userChoice=$(this).attr('id');
    var cpuMove=computerMove();
    $(".verses").text(`You: ${iconReturn(userChoice)} || Computer: ${iconReturn(cpuMove)}`);
    console.log(userChoice);
    console.log(cpuMove);
    compareMove(userChoice,cpuMove);
});

function computerMove(){
    var random=Math.floor(Math.random()*3);
    return moves[random];
}

function compareMove(player,cpu){
    if(player===cpu){
        console.log("Draw");
        draw++;
        $(".results").text("Draw!");
    }
    else if(player=="rock" && cpu=="paper"){
        console.log("CPU win");
        $(".results").text("You Loose!");
        cpuScore++;
    }
    else if(player=="rock" && cpu=="sissors"){
        console.log("player win");
        $(".results").text("You Win!");
        playerScore++;
    }
    else if(player=="paper" && cpu=="rock"){
        console.log("player win");
        $(".results").text("You Win!");
        playerScore++;
    }
    else if(player=="paper" && cpu=="sissors"){
        console.log("CPU win");
        $(".results").text("You Loose");
        cpuScore++;
    }
    else if(player=="sissors" && cpu=="rock"){
        console.log("CPU win");
        $(".results").text("You Loose!");
        cpuScore++;
    }
    else if(player=="sissors" && cpu=="paper"){
        console.log("player win");
        $(".results").text("You Win!");
        playerScore++;
    }
    else{
        console.log("Coding In Progress...")
    }
    $(".game-results").text("Wins: "+playerScore+", Looses: "+cpuScore+", Ties: "+draw);
}

$(".button").on("click",function(){
    playerScore=0;
    cpuScore=0;
    draw=0;
    $(".game-results").text("Wins: "+playerScore+", Looses: "+cpuScore+", Ties: "+draw);
    $(".results").text("Click To Play!");
    $(".verses").text("You: Nan || Computer: Nan");
});

function iconReturn(choice){
    if(choice=="rock"){
        return "✊🏽";
    }
    else if(choice=="paper"){
        return "🖐🏽";
    }
    else if(choice=="sissors"){ 
        return "✌🏽";
    }
    else {
        return ("choice not found.")
    }
}