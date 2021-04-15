class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide();
    background("lightblue");
    textSize(30);
    text("result of Quiz",320,65);
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      var display_Answers = 230
      fill("blue");
      textSize(20);
      text("note:contestant who answered correctly are hilighted in green colour");
      for(var plr in allContestants){
        var correctAns = "2";

      }
      if(correctAns === allContestants[plr].answer){
        fill("green");
      }else{
        fill("red");
      }
      display_Answers+=30
      textSize(20);
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers);

    }

    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
