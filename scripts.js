
function getWikiImages() {
    location.href = "https://www.wikimedia.org/";

    allImageElements = document.querySelectorAll('img');

    wikiImages = [];

    for (i = 0; i < allImageElements.length; i++){
        wikiImages.push(allImageElements[i].src);
    }

    wikiImages = JSON.stringify(wikiImages);

    console.log(wikiImages);
}

document.addEventListener("DOMContentLoaded", function () {

    var loadWikiImages = new XMLHttpRequest();

    loadWikiImages.onreadystatechange = function () {

        var imageLinks = JSON.parse(loadWikiImages.responseText);
        var contentDiv = document.querySelector(".content");

        for (var i = 0; i < imageLinks.length; i++){

            console.log([i]);
            var newImage = document.createElement("img");
            newImage.src = imageLinks[i];
            contentDiv.appendChild(newImage);
        }
    }

    loadWikiImages.open("GET","wikiImages.json",true);
    loadWikiImages.send();
});
