let input = prompt("what is your name?");
alert("nice to meet you, " + input);
let year = prompt("what year would you like to go to? ");
if (year >= 2015){
    console.log("I see you're a fan of Back to the Future 2");


     let  BG = prompt("Would you rather deal with Biff, or Griff");
     if (BG == 'Biff'){
      console.log(" Hmm, interesting."); 
      let SR = prompt(BG + "is angry and has a cane. Do you stand and fight, or run away like a coward (S/R)?");
              if (SR == 'S'){
           console.log("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");

             }
             else if (SR == 'R'){
                console.log("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
             }
         }

     else if (BG = "Griff"){
         let IO = prompt('Griff is asking you if you are in, or out. What do you say?'); 
         if (IO == "in"){
            console.log("Bad call. Griff and his cronies rob the Hill Valley bank and framSe you for it. No more time travel for you." ); 
         }
         else if(IO == "out"){
            console.log("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
         }
     }
    
    }  
    
    
    else if(year>=1985&&year<=2014){
        let name=prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then? ");
        console.log("welcome to the future, "+name);
    }
    
    else if(year>=1955&&year<=1984){
        let answer=prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)");
        if (answer=="Y"){
            console.log("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
        }
        else if(answer=="N"){
            console.log("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
        }
        else if(answer=="S")
            console.log("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.")
    }

    else if(year<1955){
        alert("I see you're a fan of Back to the Future 3 You've run out of gas and can't get back to your own time!")
       var power = prompt(" How do you power the Time Machine?");
        if(power=="H"){
         console.log("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.")
         }
         else if (power=="M"){
             console.log("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855")
           }
         else {
            var x = prompt(" Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do?");
               if(x=="T"){
                console.log("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.")
                 }
                 else if(x=="L"){
              
                console.log("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.")
                  }
           }
     }
     
     