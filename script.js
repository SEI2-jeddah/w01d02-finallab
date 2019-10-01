
console.log("welcome to TopChef!")
var ttt = "...▀▀▀▀▀▀▀▀..."
console.log(ttt+ttt+ttt+ttt+ttt)

let input = prompt("what is your name?")
console.log(input)



console.log("1. main dish 2. appetizer 3.dessert")
let meal = prompt("Choose number of the meal you like to cook?")
console.log(meal)

if(meal==1){//main dish
console.log("1.Burger 2.Kabab")
let dish = prompt("Choose number of the dish you like to cook?")
console.log(dish)
    if(dish == 1){ // burger
        console.log("1.Chicken 2.Beef")
        let dishProtien = prompt("Choose number of the dishProtien you like to cook?")
        console.log(dishProtien)

            if(dishProtien == 1){//chicken
            console.log("Can't wait for your Chicken Burger you have to get two affermation to win !")
            console.log("the judging starts now!")

            //var arr = ["perfect","burned","too salty","delicious"]
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }else{//Beef
            onsole.log("Can't wait for your Beef Burger you have to get two affermation to win !")
            console.log("the judging starts now!")

            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }
            

            //Math.floor(Math.random() * 2)
      //// the judging random . 3 judjes ( 2 true > win ) ( less than 2 true > lose)     

        
    }else if(dish == 2){
        console.log("1.Chicken 2.Beef")
        let dishProtien = prompt("Choose number of the dishProtien you like to cook?")
        console.log(dishProtien)

        if(dishProtien == 1){//chicken
            console.log("Can't wait for your Chicken Kabab you have to get two affermation to win !")
            console.log("the judging starts now!")

            //var arr = ["perfect","burned","too salty","delicious"]
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }else if (dishProtien == 2){//Beef
            console.log("Can't wait for your Beef Kabab you have to get two affermation to win !")
            console.log("the judging starts now!")

            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }


    }

}else if(meal == 2){
console.log("1.Salad 2.Soup")
let dish = prompt("Choose number of the dish you like to cook?")
console.log(dish)
    if(dish == 1){ // Salad
        console.log("1.Ceaser 2.Greek")
        let salads = prompt("Choose number of the salad you like to make?")
        console.log(salads)
        if(salads == 1){//ceaser
            console.log("Can't wait for your Ceaser salad you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }else if(salads == 2){
            console.log("Can't wait for your Greek salad you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }
  }else if(dish == 2){
        console.log("1.Corn 2.Broccoli")
        let soup = prompt("Choose number of the soup you like to make?")
        console.log(soup)
        if(soup ==1){ // corn

            console.log("Can't wait for your corn soup you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }

        }else if(soup ==2){//broccoli

            console.log("Can't wait for your broccoli soup you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }

        }
    }

}else if(meal ==3){
    console.log("1.cake 2.pie")
    let dish = prompt("Choose number of the dish you like to cook?")
    console.log(dish)
    if(dish ==1){//cake
        console.log("1.lava chocolate 2.strawberry short")
        let flavour = prompt("Choose number of the cake you like to cook?")
        console.log(flavour)
        if(flavour ==1){//chocolate lava
            console.log("Can't wait for your chocolate lava cake you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }else if(flavour == 2){ // strawberry short cake
            console.log("Can't wait for your strawberry short cake you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }

        }    
    }else if(dish == 2){//pie
        console.log("1. pumpkin 2.pecan")
        let flavour = prompt("Choose number of the pie you like to cook?")
        console.log(flavour)

        if(flavour == 1){//pumpkin
            console.log("Can't wait for your pumpkin pie you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }else if(flavour == 2){//pecan
            console.log("Can't wait for your pecan pie you have to get two affermation to win !")
            console.log("the judging starts now!")
            var judgingArr = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
            var score = judgingArr[0]+judgingArr[1]+judgingArr[2]

            if(score >= 2){//score
                console.log("CONGRATS !! You've got "+score+" affermations you've won!")
            }else{
                console.log("sorry you've lost :(")
            }
        }
    }
}

console.log(ttt+ttt+ttt+ttt+ttt)