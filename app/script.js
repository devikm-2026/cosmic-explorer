const exploreButton = document.getElementById("exploreBtn");

exploreButton.addEventListener("click", function () {

    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });

});


function showPlanet(planet) {

    const message = document.getElementById("message");

    const messageText = document.getElementById("messageText");

    messageText.innerText =
        "You selected " + planet + " 🚀";

    message.classList.add("show");

}


function closeMessage() {

    const message = document.getElementById("message");

    message.classList.remove("show");

}