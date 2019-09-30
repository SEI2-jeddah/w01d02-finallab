var input = prompt("Wlcome to T.H pizza restaurant , would you like to order ? (y/n) " );
console.log(input);


if (input === "y" || input === "Y" ) {

    var choiceOne = prompt("would you like to have papparoni");
    if (choiceOne === "y") {
      var choiceTwo = prompt ("would you like to have onion?");
        if (choiceTwo === "y") {

            choiceThree = prompt ("would you like to have olive ?");
            if (choiceThree === "y") {
                    choiceFour = prompt("would you like to have tomato ?");

                      if (choiceFour == "y") {


                          var choiceSix = prompt("would you like to have exta cheese ?");
                            if (choiceSix === "y") {
                                alert("one Pizza with papparoni , onion , olive amd tomato with extra cheese");
                            } else {
                              alert("one Pizza with papparoni , onion , olive amd tomato is ready");


                            }




                      }else {
                        alert("here's your pizza with papparoni,onion and olive");
                      }

            }else {
              alert("Cool , here's your pizza with onion and papparoni");
            }


        }else {
          alert("here's your pizza with only papparoni");
        }

    }else {
      alert("Cool here's your empty pizza , enjoy it ");
    }


} else {
  alert("Alright , see you soon");
}