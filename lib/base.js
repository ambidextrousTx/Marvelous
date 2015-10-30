function httpGet(url) {
    
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getResults(character) {
    httpGet('http://gateway.marvel.com:80/v1/public/characters?name=' + character + '&apikey=f52173a61b57b0c519097e89a8c0ce41');
}
