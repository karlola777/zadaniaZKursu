//Javascript - Folder 3 - Tablice

//Ćwiczenie 1
/*
 Napisz funkcję ```printTable(array)``` która przyjmuje tylko jeden parametr - tablice. Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz go w konsoli.
 Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!

 Następnie zastąp swoją funkcje metodą ```foreach```.
 */

//tablica do ćw. 1, 3, 4 (reszta ma własne)
var mystrings = ['tre','Ihas aspace', 'ninechara', 'tencharact', '1234', '12 3456', 'waymorethan10chars'];

function printTableFirstVersion(array) {

	if (!Array.isArray(array)) {
	return "To nie jest tablica";}
	else{
		for (var i = 0; i < array.length; i++){
		console.log(array[i]);
		}
	}
}

function printTable(array) {

	if (!Array.isArray(array)) {
	return "To nie jest tablica";
	}
	else{
		array.forEach(function(element) {
		console.log(element);
		});
		
		}
	}
printTable(mystrings);

//ćwiczenie 2
/*
 Napisz dwie funkcje ```add(array)``` i ```multiply(array)```. Obie mają przyjmować tylko jeden argument - tablicę. Następnie funkcja ```add``` ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli for), a funkcja ```multiply`` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli for).
 Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!
 */
var mynumbers = [1,2, 95, 23];

function addUp(array) {
	if (!Array.isArray(array)) {
		return "To nie jest tablica";
	}
	else {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}
}

console.log(addUp(mynumbers));

function multiply(array) {
	if (!Array.isArray(array)) {
		return "To nie jest tablica";
	}
	else {
		var product = 1;
		for (var i = 0; i < array.length; i++) {
			product = product * array[i];
		}
		return product;
	}
}

console.log(multiply(mynumbers));

/*Ćwiczenie 3
Stwórz tablice z napisami. Potem używając odpowiedniej metody iteracyjnej sprawdź czy napisy w tej tablicy spełniają następujące warunki:
(zakładam, że rozłącznie, tzn. spełnienie dowolnego daje true lub zwraca element - KM)
1.	Mają co najmniej 10 znaków
2.	Mają co najmniej 1 literę
3.	Nie zawierają spacji */

function verifyStrings(mystring){
    if (mystring.length >= 10){
        return true;
    }
    var anyletters = new RegExp("^[a-zA-Z]");
    if(anyletters.test(mystring))
    {
        return true;
    }
    var whitespace = new RegExp("\s");
    if(!whitespace.test(mystring)){
        return true;
    }
}
//sub-function passed to .some method
console.log('----- Czy wszystko w tablicy spełnia dowolny z 3 warunków -----');
console.log(mystrings.some(verifyStrings));

//And now some embedded function practise...
// (>= 10 chars, at least 1 letter, no spaces)
returnMatching = mystrings.filter(function (element) {
	var anyletters = /^[a-zA-Z]/;
	var whitespace = /\s/;
	return element.length >= 10 ||
		element.match(anyletters) ||
		!element.match(whitespace);
});
console.log('----- Które el. tablicy spełniają dowolny z 3 warunków? -----');
console.log(returnMatching);


/*## Ćwiczenie 4
Napisz funkcję ```reverseSorted(array)```. Funkcja ta ma przyjmować jako argument jedną zmienną - tablicę. Funkcja ma zwracać tą tablicę posortowaną, a następnie odwróconą.
Użyj metod wbudowanych dla tablicy. */
console.log('----- Tablica posortowana i odwrócona -----');
function reverseSorted(array) {
    return array.sort().reverse();
}

console.log(reverseSorted(mystrings));

/*## Ćwiczenie 5
Napisz funkcję ```createMultiTable(number)```. Funkcja ta przyjmuje liczbę całkowitą. Funkcja ta ma zwrócić dwu wymiarową tablicę która w obu wymiarach ma podaną wielkość (tablicę możewsz wypełnić kolejnymi liczbami całkowitymi). */
console.log('----- Tablica "kwadrat o boku n" -----');
function createMultirowTable(number){
    var mainArray = [];
    var subArray = [];
    for (var j = 1; j <= number; j++) {
        subArray.push(j);
    }
    for (var i = 1; i <= number; i++) {
        mainArray.push(subArray);
    }
    return mainArray;
}

console.log(createMultirowTable(3));

/*## Ćwiczenie 6
Napisz funkcję ```print2DTable(array)``` która będzie działać analogicznie do zadania 1 tylko dla tablic 2 wymiarowych.

Następnie zastąp swoją funkcje metodą ```foreach```.*/

array2d = [
 ['this', 'is', 'a'],
 [2, 'dimensional', 'array'],
 ['to', 'jest'],
 ['tablica', 'dwuwymiarowa'],
 ['ceci', 'est'],
 ['un'],
 ['tableau', 'de', 2, 'dimensions']
];

console.log('----- Spłaszczona tablica 2D: for -----');

function print2DTable(array) {

    if (!Array.isArray(array)) {
        return "To nie jest tablica";
    }
    else{
            for (var i=0; i < array.length; i++) {
                for (var j=0; j < array[i].length; j++) {
                    console.log(array[i][j]);
                }
            }
    }
}
print2DTable(array2d);

console.log('----- Spłaszczona tablica 2D: forEach -----');

//for --> foreach
function print2DTableWithMethod(array) {

    if (!Array.isArray(array)) {
        return "To nie jest tablica";
    }
    else{
        array.forEach(function(element){
            element.forEach(function(subelement){
                console.log(subelement);
            });
        });
        // (var i=0; i < array.length; i++) {
        //     for (var j=0; j < array[i].length; j++) {
        //         console.log(array[i][j]);
        //     }
        // }
    }
}
print2DTableWithMethod(array2d);
