/**
 * Javascript - Folder 5 - Zaawansowane funkcje
 * Zmienne globalne i lokalne. Pami�tasz przenoszenie instrukcji?
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */


//deklarowana jest zmienna globalna o wartości 3
var someGlobal = 3;

//funkcja nie przyjmuje nic z zewnątrz
function someFunction1() {

    //someGlobal nie jest pobierana spoza funkcji
    //ale silnik JS ściąga poniższą zmienną bez wartości
    // na górę ciała funkcji: var someGlobal;
    console.log(someGlobal);

    //silnik JS nadaje wartość someGlobal == undefined
    var someGlobal = 5;

    //wyświetla się zmienna lokalna dla funkcji
    console.log(someGlobal);
}

//ta funkcja też nie przyjmuje nic z zewnątrz
function someFunction2() {

    //ale wewnątrz nie ma deklaracji zmiennej
    //więc sięga po niższy zakres, tu - globalny
    console.log(someGlobal);
}

//wywołanie daje 2 efekty: "undefined" i "5"
someFunction1();

//wywołanie sięga po opcję ratunkową "3" :)
someFunction2();
