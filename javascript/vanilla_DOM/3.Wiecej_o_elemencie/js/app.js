/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
//ćwiczenie 1

document.querySelector(".firefox").style.backgroundImage = "url('assets/img/firefox.png')";
document.querySelector(".edge").style.backgroundImage = "url('assets/img/edge.png')";

/* znak + -> znajdowanie brata wszystkiego o klasie chrome. Poszukać, co robią "+" w css */
document.querySelector(".chrome + a").innerHTML="Chrome";
document.querySelector(".chrome").style.width = "100px";
document.querySelector(".firefox + a").innerHTML="Firefox";
document.querySelector(".firefox + a").setAttribute("href","http://getfirefox.com");
document.querySelector(".edge + a").setAttribute("href","https://www.microsoft.com/pl-pl/windows/microsoft-edge");

//ćwiczenie 2

document.querySelector("span#name").innerHTML="Karolina";
document.querySelector("span#fav_color").innerHTML="<div style='background-color:#B4D455;width:100px;height:50px'>#B4D455</div>";
document.querySelector("span#fav_meal").innerHTML="<a href=http://www.jadlonomia.com/przepisy/chili-sin-carne/>chili sin carne</a>";

//ćwiczenie 3
var menuList = document.querySelector(".ex3 > ul");
menuList.classList.add("menu");
var menuArr = menuList.querySelectorAll("li");
for (var a = 0; a < menuArr.length; a++){
menuArr[a].classList.add("menuElement"); //od tego momentu menu zmienia się w poziomą tablicę,
}
//wszystkiemu, co ma klasę .error, zabierz klasę .error
var errorItems =document.querySelectorAll(".ex3 .error");
for (var a = 0; a < errorItems.length; a++){
errorItems[a].classList.remove("error");
}

//ćwiczenie 4


});