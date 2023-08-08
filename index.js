var moves=["rock","paper","sissors"];

var score=JSON.parse(localStorage.getItem('score'))||{
    playerScore:0,
    cpuScore:0,
    draw:0
};
$(".game-results").text("Wins: "+score.playerScore+", Looses: "+score.cpuScore+", Ties: "+score.draw);

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
        score.draw++;
        $(".results").text("Draw!");
    }
    else if(player=="rock" && cpu=="paper"){
        console.log("CPU win");
        $(".results").text("You Loose!");
        score.cpuScore++;
    }
    else if(player=="rock" && cpu=="sissors"){
        console.log("player win");
        $(".results").text("You Win!");
        score.playerScore++;
    }
    else if(player=="paper" && cpu=="rock"){
        console.log("player win");
        $(".results").text("You Win!");
        score.playerScore++;
    }
    else if(player=="paper" && cpu=="sissors"){
        console.log("CPU win");
        $(".results").text("You Loose");
        score.cpuScore++;
    }
    else if(player=="sissors" && cpu=="rock"){
        console.log("CPU win");
        $(".results").text("You Loose!");
        score.cpuScore++;
    }
    else if(player=="sissors" && cpu=="paper"){
        console.log("player win");
        $(".results").text("You Win!");
        score.playerScore++;
    }
    else{
        console.log("Coding In Progress...")
    }
    $(".game-results").text("Wins: "+score.playerScore+", Looses: "+score.cpuScore+", Ties: "+score.draw);

    localStorage.setItem('score',JSON.stringify(score));
}

$(".button").on("click",function(){
    score.playerScore=0;
    score.cpuScore=0;
    score.draw=0;
    localStorage.removeItem('score');
    $(".game-results").text("Wins: "+score.playerScore+", Looses: "+score.cpuScore+", Ties: "+score.draw);
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
