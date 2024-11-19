function buttonClicked(){
    document.body.style.backgroundColor = "pink";
    const image = document.getElementById("Beyonce");

    if (image.style.display === "none") {
        image.style.display = "block"; // Make it visible again
    } else {
        image.style.display = "none"; // Hide it
    }
}

