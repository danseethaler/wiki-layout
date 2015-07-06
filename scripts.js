location.href = "https://www.wikimedia.org/";

allImageElements = document.querySelectorAll('img');

wikiImages = [];

for (i = 0; i < allImageElements.length; i++){
    wikiImages.push(allImageElements[i].src);
}

wikiImages = JSON.stringify(wikiImages);

console.log(wikiImages);


// wikimedia images in JSON format

[
    "https://www.wikimedia.org/static/images/project-logos/enwiki.png",
    "https://www.wikimedia.org/static/images/project-logos/enwiktionary.png",
    "https://www.wikimedia.org/static/images/project-logos/wikiquote.png",
    "https://www.wikimedia.org/static/images/project-logos/wikibooks.png",
    "https://www.wikimedia.org/static/images/project-logos/wikisource.png",
    "https://upload.wikimedia.org/wikinews/en/b/bc/Wiki.png",
    "https://www.wikimedia.org/static/images/project-logos/enwikiversity.png",
    "https://www.wikimedia.org/static/images/project-logos/specieswiki.png",
    "https://www.wikimedia.org/static/images/project-logos/mediawikiwiki.png",
    "https://www.wikimedia.org/static/images/project-logos/wikidatawiki.png",
    "https://www.wikimedia.org/static/images/project-logos/commonswiki.png",
    "https://www.wikimedia.org/static/images/project-logos/wikivoyage.png",
    "https://www.wikimedia.org/static/images/project-logos/metawiki.png",
    "https://www.wikimedia.org/static/images/project-logos/incubatorwiki.png",
    "https://wikitech.wikimedia.org/w/images/c/cf/Labslogo_thumb.png",
    "https://www.wikimedia.org/static/images/project-logos/foundationwiki.png"
]
