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
}

function showSettings(){
document.querySelector("#settings").classList.add("show");
document.querySelector("#kryds").addEventListener("click", hideSettings);

}

function hideSettings() {
    // Fade startskærm ud
    document.querySelector("#settings").classList.add("fade_out");
}


