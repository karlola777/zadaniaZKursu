/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//Ćwiczenie 2
var home1 = document.getElementById("home"); //get - atrybut bez znaków z css
var home2 = document.querySelector("#home");//query - atrybut ze znakami css: . #
console.log (home1, home2);
var LiNotDataDirection = document.querySelector("li:not([data-direction])");
console.log ('LiNotDataDirection: '+LiNotDataDirection); //tu zamiast html node'a mamy wynik typeof :)
console.log (LiNotDataDirection); //a tu html node normalnie
var firstBlockClass = document.querySelector(".block");
console.log ('firstBlockClass: '+firstBlockClass);
console.log (firstBlockClass);

//Ćwiczenie 2

var allLiInNav = document.querySelectorAll("nav li"); //wchodzimy do nav i szukamy li
console.log (allLiInNav);
var allPinDiv = document.querySelectorAll("div p");
console.log (allPinDiv);
var allDivInArticle = document.querySelectorAll("article div");
console.log (allDivInArticle);

//Ćwiczenie 3

//ile h1 jest w article
var articleFirst = document.querySelector("article.first"); //szuka i tworzy obiekt articleFirst
console.log(articleFirst);
var headers = articleFirst.querySelectorAll("h1"); //szukamy już w obiekcie articleFirst
var howManyHeaders = headers.length; // zliczamy obiekt-tablicę
console.log(howManyHeaders);

//jakie elementy o klasie offers są w article
var offers = articleFirst.querySelectorAll(".offers");
for (var i = 0; i < offers.length; i++){
console.log(offers[i].tagName); //tagName - atrybut wbudowany
}

//jakie divy są w article
var divs = articleFirst.querySelectorAll("div");
for (var j = 0; j < divs.length; j++){
console.log(divs[j].className);
}

//Ćwiczenie dodatkowe
    //zmienna allLiInNav z ćw. 2
    for (var k = 0; k < allLiInNav.length; k++){
        if (allLiInNav[k].dataset.direction == undefined){
            allLiInNav[k].dataset.direction = 'top';
            console.log('ustawiono dla elementu nr '+k);
        }
        else console.log('pominięto element nr '+k);
    }

});










