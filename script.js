let input = prompt("what is your name?")
let name = input
let input1 = prompt("nice to meet you ," + name +" what year would you like to go to ? ")
let yearInput = input1


if ( yearInput >= 2015 )
{
  let input2 = prompt(" I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)")

  if ( input2 == "B" || input2 == "b" )
  {
    let input3 = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)")
    
    if ( input3 == "S" || input3 == "s" )
    {
      console.log("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.")
    }

    else if ( input3 == "R" || input3 == "r" )
    {
     console.log("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice")
    }
  } 

  else if (input2 == "G" || input2 =="g")
  {
    let input4 = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)")
    if (input4 == "I"|| input4 == "i")
    {
      console.log("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.")
    }
    else if (input4 == "O" || input4 == "o")
    {
      console.log("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.")
    }
  }
} 


else if ( yearInput >= 1985 && yearInput < 2015 )
{
  let input5 = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?")
  let name2 = input5
  console.log("Welcome to the future "+name2);
}



else if ( yearInput < 1985 && yearInput > 1955 ) 
{
  let input6 = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)")
if ( input6 == "Y" || input6 == "y" )
 {
  console.log("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.")
 }
else if ( input6=="N" || input6 == "n" )
 {
  console.log("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.")
 }
else if ( input6=="S" || input6 == "s" )
 {
  console.log("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.")
 }
 }


else if (yearInput <= 1955)
{
let input7= prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)")
if ( input7=="H" || input7 == "h" )
 {
  console.log("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it")
 }
else if ( input7=="M" || input7 == "h" )
 {
  console.log("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855")
 }
else if ( input7=="T" || input7=="t" )
 {
  let input8= prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)")
  if ( input8=="T" || input8 == "t" )
  {
    console.log("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.")
  }
  else if ( input8=="L" || input8 == "l" )
  {
    console.log("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.")
  }
}
}