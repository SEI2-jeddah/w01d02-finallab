var Rock = 1;
var Paper = 2;
var Scissors =3;
var comScore = 0;
var userScore = 0;



while (userScore <= 2 && comScore <= 2 ){
  var com = Math.floor(Math.random() * 4);
var user= prompt("what is your Play? 1 For Rock| 2 for Paper | 3 for Scissors ");  

if (com == user){
    console.log("Computer Choose Samething")
    console.log("Tie !")}
else if (user==1){
  if (com ==2){
    console.log("Computer Choose Paper")  
    console.log("Computer Wins The Round!")
    comScore +=1;
  }else{
    console.log("Computer Choose Scissors") 
    console.log("You Wins The Round!")
    userScore += 1;
  }
}

else if (user==2){
  if(com==1){
    console.log("Computer Choose Rock")
    console.log("You Wins The Round!")
    userScore += 1;
   }
   
  else {
    console.log("Computer Choose Scissors")
    console.log("Computer Wins The Round!")
    comScore +=1;
    }
  }

else if (user==3){
  if(com==1){
    console.log("Computer Choose Rock")
      console.log("Computer Wins The Round!")
      comScore +=1;
    }
  else {com==2} {
    console.log("Computer Choose Paper")
      console.log("You Wins The Round!")
      userScore += 1;
    }
    
  }
  console.log("User "+userScore+" Com "+comScore)

  
}

  if (userScore == 3){
      alert("You Win The Game!")
    }else if(comScore == 3){ alert("Computer Wins The Game!")}
