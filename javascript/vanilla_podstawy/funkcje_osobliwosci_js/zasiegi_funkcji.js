/**
 * Javascript - Folder 5 - Zaawansowane funkcje
 * Zagnie�d�anie funkcji.
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */


//początek deklaracji zewnętrznej funkcji
function jeden() {

    //zmienna lokalna w ciele jeden()
    var zmienna1 = 1;

    //fukcja osadzona w jeden()
    function dwa() {

        //zmienna niezdefiniowana w ramach dwa(), więc wzięta z jeden()
        console.log(zmienna1);

        //deklaracja nie jest użyta w ramach dwa()
        var zmienna2 = 3;
    }

    //wykonanie funkcji wewnętrznej
    dwa();

    //jeden() nie ma dostępu do zm lokalnych dwa():
    console.log(zmienna2)
}

//wykonanie funkcji zewnętrznej
//zmienna1 wyświetla się normalnie (#18)
//zmienna2 niezdefiniowana (#31)
jeden();

//wniosek: JS sięga po zmienne tylko z wewnątrz na zewnątrz,
//nigdy do funkcji wewnętrznych
