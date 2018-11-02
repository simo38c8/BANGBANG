window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    // Nulstil alting
    // Note: how?

    // -> showStart
    showStart();

}

//START GAME

function showStart() {
    console.log("Show start");
    // Vis startskærm
    document.querySelector("#start").classList.add("show");
    // Start animation på start-knap
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#knap").classList.add("pulse");

    //Når der er klikket på start knap gå til hide start

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#knap").addEventListener("click", showSettings);

}

function hideStart() {
    console.log("Hide start");
    // Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    // Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // Når fade er færdig, gå til start game
    document.querySelector("#start").addEventListener("animationend", startGame);

    document.querySelector("#knap").classList.remove("pulse");
    document.querySelector("#knap").classList.add("hide");
}


function startGame() {
    console.log("Start game");
    // Skjul startskærm
    document.querySelector("#start").classList.add("hide");
    // Vis spilskærm
    document.querySelector("#start").classList.remove("show");

    document.querySelector("#skurk").addEventListener("click", clickSkurk);
    document.querySelector("#kvinde").addEventListener("click", clickKvinde);
    document.querySelector("#mexico").addEventListener("click", clickMexico);

    document.querySelector("#skurk1").addEventListener("click", clickSkurk1);
    document.querySelector("#kvinde1").addEventListener("click", clickKvinde1);
    document.querySelector("#mexico1").addEventListener("click", clickMexico1);
}

//STARTGAME SLUT

//SETTINGS

function showSettings() {
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#kryds").addEventListener("click", hideSettings);

}

function hideSettings() {
    // Fade startskærm ud
    document.querySelector("#settings").classList.add("fade_out");
}

//SETTINGS SLUT

//POINT OG LIV

let point = 0;
let liv = 3;

//POINT OG LIV SLUT


//CLICK FIGURER

function clickSkurk() {
    console.log("click skurk");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    console.log(this);
    this.classList.add("fade_out")

    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "positionb" + myNumber;
    gameStatus()
}


function clickKvinde() {
    console.log("click kvinde");

    console.log(liv);
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("hide");
    liv--;

    console.log(this);



    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "positionb" + myNumber;
    gameStatus()

}



function clickMexico() {
    console.log("click mexico");
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;
    this.classList.add("hide");


    console.log(this);

    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "positionb" + myNumber;
    gameStatus()



}

//CLICK FIGURER SLUT


//CLICK FIGURER PÅ FORREST RÆKKE

function clickSkurk1() {
    console.log("click skurk");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    console.log(this);
    this.classList.add("fade_out")

    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "position" + myNumber;
    gameStatus()
}


function clickKvinde1() {
    console.log("click kvinde");

    console.log(liv);
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("hide");
    liv--;

    console.log(this);



    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "position" + myNumber;
    gameStatus()

}



function clickMexico1() {
    console.log("click mexico");
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;
    this.classList.add("hide");


    console.log(this);

    let myNumber = Math.floor((Math.random() * 3) + 1);
    console.log("tilfældigt tal " + myNumber)

    this.classList = "position" + myNumber;
    gameStatus()

}

//CLICK FIGURER PÅ FORREST RÆKKE SLUT


//GAME OVER OG LEVEL COMPLETE

function gameStatus() {
    if (liv <= 0) {
        gameOver();
    }

    if (point > 9) {
        levelCompleted();
    }
}

function gameOver() {
    console.log("gameover");
    document.querySelector("#gameover").classList.add("show");
    document.querySelector("#replay").classList.add("pulse");
}

function levelCompleted() {
    console.log("victory");
    document.querySelector("#levelcomplete").classList.add("show");

}

//GAME OVER OG GAME COMPLETE SLUT
