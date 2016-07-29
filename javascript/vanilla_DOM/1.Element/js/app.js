/**
 * Created by Jacek on 2016-01-11.
 */
document.addEventListener("DOMContentLoaded", function(){
    //jedyne, co ma ID #home. Zwraca obiekt.
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    /*wszystkie dzieci pierwszego elementu o klasie offer.
    Zwraca obiekt o klasie offer i kolekcję/tablicę jego dzieci */
    var banner = document.querySelector(".ban"); /*pierwszy el z klasą ban */
    var blocks = document.querySelectorAll(".blocks"); /*wszystko z klasą blocks. TABLICA */

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Ćwiczenie 1
    console.log('typ homeElement:\n');
    console.log(typeof(homeElement));
    console.log('Typy i klasy w homeElement:\n');
    for (var b=0;b < homeElement.classList.length;b++){
        console.log(typeof(homeElement));
        console.log(homeElement.classList[b]); //klasahome1, klasahome2...
       // console.log(homeElement.className[b]); // k, l... <- w kolejnych obrotach wypisuje po jednej literce z classList
    }
    //
    console.log('Typ childElements:\n');
    console.log(typeof(childElements));
    console.log('Co zawiera childElements, czyli dzieci czegoś o klasie .offers:\n');
    for (var c=0;c < childElements.length;c++){
        console.log(typeof(childElements[c]));
        console.log(childElements[c].classList);
        console.log(childElements[c].className);
    }
    console.log('^ Wynik: tylko dla pierwszego elementu o klasie .offers');
    //
	console.log('Klasy elementu o id #home:\n' +homeElement.className);
    
	 var childElementsLength=childElements.length;
    console.log('Klasy dzieci elementu o klasie .offers (nb. pusta linijka gdy podelement nie ma żadnych klas):\n');
	 for (var a=0; a < childElementsLength; a++){
		console.log(childElements[a].className);
	 }
	 console.log('Klasy elementu o klasie .ban:\n' +banner.className);


//Ćwiczenie 2
	  for (var i=0; i < blocks.length; i++){
		console.log('Klasy elementu o klasie .blocks:\n ' +blocks[i].className);
		console.log('html wewnątrz elementu o klasie .blocks:\n ' +blocks[i].innerHTML); //<div class="blocks">
		console.log('cały html elementu o klasie .blocks\n ' +blocks[i].outerHTML);// bez <div class="blocks"> bo najbardziej zewnętrzny
		
		blocks[i].innerHTML="To jest nowa wartość diva o klasie blocks";
	 }
//Ćwiczenie 3
    //Element został wcześniej złapany do zmiennej homeElement po swoim id (getElementById)
    //a teraz to id jest odpytywane. Lol :)
	 console.log('Element, który jest w zmiennej home:' +homeElement.id);

//Ćwiczenie 4
    console.log('lista tagów dla childElements: ');
    for (var j=0; j<childElements.length; j++){
        console.log(childElements[j].tagName);
        //nodeName zwraca to samo
        //ale obejmuje też wewnętrzne interfejsy JS (element, text, comments w kodzie)
    }

//Ćwiczenie 5
    var links = document.querySelectorAll('a');
    for (var k=0; k < links.length; k++){
        console.log(links[k].parentElement.dataset);
    }

//Ćwiczenie 6
    var cL = banner.classList;
    var cN = banner.className;
    console.log('Lista klas dla banner: '+cL+', typ: '+typeof(cL));
    console.log('Nazwy klas dla banner: '+cN+', typ: '+typeof(cN));
});

