//Javascript - Folder 2 - Funkcje

/*## Ćwiczenie 1
Napisz funkcję miksującą warzywa np. o nazwie miksowanie, która jako argument będzie przyjmowała warzywo.
Zadaniem funkcji jest zmiksowanie warzywa i zwrócenie zmiksowanej papki. Wypisz w konsoli (nie w funkcji, funkcja tylko zwraca)
tekst zwrócony przez funkcję.
Pamiętaj o stworzeniu odpowiedniego komentarza. */

//Ćwiczenie 1

function miksowanie(warzywo) {
	return "zmiksowany " + warzywo;
}

var wynik = miksowanie("ogorek");
console.log(wynik);

//Ćwiczenie 2

function biggur(a,b){
if (a>b) {return a;}
if (b>a) {return b;}
}

var wieksza = biggur(6,18);
console.log(wieksza);


//Ćwiczenie 3 - pierwsza poważna pętla, lol
//Znajdywanie największej liczby w tablicy

function maxNumbers() { //nie ma argumentu, bo musi wejść nieskończenie wiele liczb
	var list = arguments; //przypisujemy tablicę arguments
	var maxEl = list[0];
	for (var i = 0; i < list.length; i++){
		var currEl = list[i];
		if(currEl > maxEl) {
		maxEl = currEl;
		}
	}
	
	return 'Największa liczba to: ' + maxEl;

}

console.log (maxNumbers(7090, 1, 235, 6463, 7548));

//Ćwiczenie 3.3

function addUp(a, b, c){
	sum = a + b + c;
	return sum;
	}
	
var sum = addUp(1,2,3);
console.log(sum);

//Ćwiczenie 4

var print = function(){
	var promise = 'Anytime, anywhere, I will use functions in my code and watch out not to make global variables';
	for(var i = 0; i < 10; i++){
		console.log(promise);
	}
};

print();

//Ćwiczenie 5
/*
 Napisz funkcję `rentCost(days)` która będzie pobierać liczbę dni jako argument a następnie pnie wyliczać koszt wynajmu pokoju według podanego wzoru:
 Wynajem trwa 1 dzień - koszt pokoju 200zł/dzień
 Wynajem trwa 2-3 dni - koszt pokoju 180zł/dzień
 Wynajem trwa 4-7 dni - koszt pokoju 160zł/dzień
 Wynajem trwa 8+ dni - koszt pokoju 150zł/dzień.
 Dodatkowo za każdy pełny tydzień przysługuje 50zł zniżki.
 */

function rentCost(days){
    var costPerDay = 0;
    if (days <= 0){return 'Error!'}
    else if (days > 0 && days < 2){costPerDay = 200}
    else if (days >= 2 && days <= 3){costPerDay = 180}
    else if (days >= 4 && days <= 7){costPerDay = 160}
    else costPerDay = 150;
    var cost = costPerDay * days;
    return cost - (Math.floor(days / 7) * 50);
}
console.log(rentCost(8)); //1150
console.log(rentCost(14)); //2000
console.log(rentCost(16)); //2300

//Ćwiczenie 6

/*
 Napisz funkcję ```rockPaperScissors(player1, player2)``` która będzie pobierać dwa napisy i zwracać infromacje kto wygrał. Poprawne napisy przyjmowane przez funkcjię to: papier, nożyce, kamień.

 Funkcja ma zwracać jeden z 4 napisów:
 "Gracz 1 wygrał",
 "Gracz 2 wygrał"
 "Remis",
 "Błędne informacje"
 */

 function rockPaperScissors(player0, player1){
     //transcribing arguments obj into array
     var picked = [];
     for (var i = 0; i < arguments.length; i++){
         picked[i] = arguments[i];
     }
     var itemsScores = {
         'rock': 0,
         'paper':1,
         'scissors':2
     };
     var items = Object.keys(itemsScores);
     var result = '';
     //if f. doesn't get TWO arguments
     if (picked.length != 2 ||
     //or if either player enters a string other than the 3 items
         items.indexOf(picked[0]) == -1 ||
         items.indexOf(picked[1]) == -1
     ){
         result = 'Wrong input';
     }
     //when words are the same, don't even calculate scores ;)
     else if (picked[0] === picked[1]){
         result = 'It\'s a tie! ' + picked[0] + ' = ' + picked[1];
     }
     else {
         var score0 = itemsScores[picked[0]];
         var score1 = itemsScores[picked[1]];
         if (score0 == (score1 + 1) % 3) {
             result = 'Player 0 wins! ' + picked[0] + ' > ' + picked[1];
         }
         else {
             result = 'Player 1 wins! ' + picked[0] + ' < ' + picked[1];
         }
     }
     return result;
 }
console.log(rockPaperScissors('rock', 'ak-47'));
console.log(rockPaperScissors('paper', ''));
console.log('------');
console.log(rockPaperScissors('rock', 'rock'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('rock', 'scissors'));
console.log('------');
console.log(rockPaperScissors('paper', 'rock'));
console.log(rockPaperScissors('paper', 'paper'));
console.log(rockPaperScissors('paper', 'scissors'));
console.log('------');
console.log(rockPaperScissors('scissors', 'rock'));
console.log(rockPaperScissors('scissors', 'paper'));
console.log(rockPaperScissors('scissors', 'scissors'));

//Ćwiczenie 7
/*
 Napisz funkcję ```calculateTip(amount, raiting)``` która będzie pobierać dwa kwotę i opis słowny obsługi. Funkcja ma zwracać albo kwotę napiwku, albo napis "Opis nieczytelny". opis może przyjmować następujące wartości:
 "Bardzo dobra obsługa" => 25% napiwku,
 "Dobra obsługa" => 20% napiwku,
 "Średnia obsługa" =>15% napiwku,
 "Zła obsługa" => 0% napiwku.

 Przykład:
 ```
 input -> 100, "Bardzo dobra obsługa"
 output -> 25
 ```
 */

function calculateTip(billed, rating) {
switch(rating){
    case 'Bardzo dobra obsługa':
        tip = 0.25 * billed;
        break;
    case 'Dobra obsługa':
        tip = 0.2 * billed;
        break;
    case 'Średnia obsługa':
        tip = 0.15 * billed;
        break;
    case 'Zła obsługa':
        tip = 0;
        break;
    default:
        tip = 'Opis nieczytelny.'
}
    return tip;
}

console.log(calculateTip(100, 'Bardzo dobra obsługa'));
console.log(calculateTip(200, 'Zła obsługa'));
console.log(calculateTip(400, 'niepasujący opis'));
