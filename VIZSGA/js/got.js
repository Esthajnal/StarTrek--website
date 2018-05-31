function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas); // át fogja konvertálni a kapott adatokat objectummá
    /*
        Pár sorral lejebb majd ezt olvashatod:
        IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

        Na azokat a függvényeket ITT HÍVD MEG! 

        A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
        Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
      */
console.log(livingCharacters(userDatas))
}

//ide írom a függvényket

function livingCharacters(charasters) {
    var living = [];
    for (var i in charasters) {
        if (!charasters[i].dead /* === ''*/) {   //nem kell, mert a benne lévő adat miatt booleanként tudja kezelni
            living.push(charasters[i]);
        }
    }
    return living
}

function sortByName(characters) {        //javított buborékos keresés
    var i= characters.length-1;
    var swap = false;
    do {
        for(var j = 0;j < characters.length;j++){
            if(characters[j].name>characters[j+1].name){
                [characters[j],characters[j+1]]=[characters[j+1],characters[j]];
                swap = true;
            }
        }
        i--
    }while ( i >= 0 && swap)
}

/* for(ciklusváltozo = kezdőérték;feltétel;léptetés){
    feltétel igaz, akkor lefut
}
ciklusváltozó =kezdőérték
while (feltétel){
    ciklusmag;
    léptetés;
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */