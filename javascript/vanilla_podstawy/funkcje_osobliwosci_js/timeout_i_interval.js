

/*
 ## Ćwiczenie 4

 Stwórz w pliku app.js funkcję, której zadaniem będzie wyświetlenie informacji: "Hello world!".

 Uruchom funkcję jeden raz po upływie 2 sekund. (Niech funkcja będzie anonimowa i niech będzie parametrem funkcji setTimeout)

 */

//jedno z ćwiczeń w tym pliku trzeba zakomentowywać, żeby zadziałało drugie

setTimeout(function(){
    document.write('Hello world!');
},2000);


/*
 ## Ćwiczenie 5

 Stwórz w pliku app.js kolejną funkcję, której celem będzie wyświetlenie napisu "jestem wywoływana co 2 sekundy".
 (Niech funkcja będzie anonimowa i niech będzie parametrem funkcji setInterval).

 Zobacz wynik w konsoli, a następnie również w konsoli wyczyść setInterval.

 Pamiętaj, aby setInterval podstawić pod zmienną. Zmienna ta będzie przechowywała id, które będzie Ci potrzebne do usunięcia setInterval-a.
 */
function co2sek() {
    var interval = setInterval(
        function () {
            console.log('Jestem wywoływana co 2 sekundy.');
        },
        2000);
    console.log('ID tego intervala: '+ interval);
}

co2sek();