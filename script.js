

let input = prompt("what is your name?")
console.log(input)
alert(input+" So you are the father of this family ")
let water = prompt("would you take water with you? y/n")
if(water==='y'){
var waterQun =prompt("great choice"+input +" tell how many bottel you would take?in numbers pls")

if(waterQun<=5){
    alert("Sorry, You will not make in 10 days with thes !")

}
else if(waterQun>5&& waterQun<20){
    alert("Sorry, It would be good if you survive the month!")
}
else if(waterQun>20&& waterQun<50){
    alert("You have to be very carfull with this quntatiy to make it , remeber there are 5 member in your family")
}
else if(waterQun>50){
    alert("You are inn the save side regarding water, just be carfull")
}
var food = prompt("Did you store food in the bunker ? y/n")
if(food== "y"){
    var foodQun =prompt("Good job so far, is it enough for your whole family ?y/n")
if (foodQun=="y"){
alert("Good job, hopefully you will be able to make it")
}else  if(foodQun=="n"){
    
        var fairTreatmen = prompt("Would try to be fair with your family regrading the food crisis ?y/n") 
        if(fairTreatmen=="y") {
        alert("our hearts with you , we hope you get help ASAP")
        var transmitter = prompt("did you establish a trinsmitter in the bunker? y/n")
if(transmitter=="y"){
var battary= prompt("Great,hopefully you didn't forget about the battray,did you bring the battry ?y/n")
if(battary=="y"){
alert("Great ,ur chance of survung with your family got higher ;)")
}else alert ("Sorry, you just have a useless transmitter ;(")
}else alert("Your chance is droped , wish you luck")
}else alert("your doughter just killed you with a shutgun !!!!Game Over")
        }
    }else 
    {
        alert("you sholud have been extra carfull , no one knows when the end :(")
    }

}else if (water=="n"){
    alert("you hit the end sooner then expected , Game over ")
}




