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
    var alive = (livingCharacters(userDatas));
    sortByName(alive); //innetől kezdve (ha nem mentettük el az alive-ot)az alive rendezett lesz
    console.log(alive);

    console.log(shearchName('Aemo', alive))
}

//ide írom a függvényket

function livingCharacters(charasters) {
    var living = [];
    for (var i in charasters) {
        if (!charasters[i].dead /* === ''*/ ) { //nem kell, mert a benne lévő adat miatt booleanként tudja kezelni
            living.push(charasters[i]);
        }
    }
    return living;
}

function sortByName(characters) { //javított buborékos keresés
    var i = characters.length - 1;
    var temp;
    var swap = false;
    do {
        swap = false;
        for (var j = 0; j < i; j++) {
            if (characters[j].name > characters[j + 1].name) {
                temp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = temp;
                swap = true;
            }
        }
        i--;
    } while (i >= 0 && swap);
    return characters;
}

/* for(ciklusváltozo = kezdőérték;feltétel;léptetés){
    feltétel igaz, akkor lefut
}
ciklusváltozó =kezdőérték
while (feltétel){
    ciklusmag;
    léptetés;
}*/

function shearchName(word, characters) {
    for (var i in characters) {

        if (characters[i].name.toLowerCase().indexOf(word.toLowerCase()) > -1) {
            return characters[i]
        }
        return 'character not found'
    }

}

/*function searchByName(characters, searchString) {
    for (var i in characters) {
        if (characters[i].name.toLowerCase === searchString.toLowerCase()) {
            return characters[i];
        }
    }
    return 'Nincs találat!';
}*/




// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */