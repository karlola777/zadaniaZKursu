/**
 * Javascript - Folder 5 - Zaawansowane funkcje
 * Funkcje wyższego rz?du.
 * Prze?led? krok po kroku ka?d? linijk? kodu. Ka?d?!
 * Spr?buj napisa? komentarze dla ka?dej z linijek kodu
 */

//funkcja zewnętrzna
function sortArray() {

    //nieposortowana tablica w f. zewn.
    var points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja w ramach sort pobiera 2 elementy z tablicy
    points.sort(function(a, b){
        //i zawsze odejmuje drugi od pierwszego
        return a-b;
        //jeśli wychodzi l. ujemna, metoda sort przesuwa element a w lewo jako mniejszy
    });

    //sortArray() wykonała metodę i jej podfunkcję, zwraca posortowane
    return points;
}

//zwracana jest posortowana oryginalna tablica
//(JS nie pracuje na kopii)
sortArray();
