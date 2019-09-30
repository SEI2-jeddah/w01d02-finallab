var input = prompt("what is your name?");
console.log(input);

var futureYr = prompt("Nice to meet you, " +input+ ".What year would you like to go to? (YYYY)");

if(futureYr >= 2015)
{
    let firstChoice = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
    if(firstChoice === "B")
    {
        let secondChoice = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");

        if(secondChoice === "S")
        {
            alert("Stand and fight")

            alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.")
        }
        else if (secondChoice === "R")
        {
            alert("Run like a coward")
            alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
 
        }
    }

}
