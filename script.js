window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    // Nulstil alting
    // Note: how?

    // -> showStart
    showStart();

}

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
}

function showSettings() {
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#kryds").addEventListener("click", hideSettings);

}

function hideSettings() {
    // Fade startskærm ud
    document.querySelector("#settings").classList.add("fade_out");
}



let point = 0;
let liv = 3;

function clickSkurk() {
    console.log("click skurk");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}


function clickKvinde() {
    console.log("click kvinde");
    liv--;
    console.log(liv);
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("fade_out");
}



function clickMexico() {
    console.log("click mexico");
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}
