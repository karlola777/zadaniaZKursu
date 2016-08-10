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
menuArr[a].classList.add("menuElement"); //menu staje się obiektem z dodaną taką klasą
}
//wszystkiemu, co ma klasę .error, zabierz klasę .error
var errorItems =document.querySelectorAll(".ex3 .error");
for (var b = 0; b < errorItems.length; b++){
errorItems[b].classList.remove("error");
}

//ćwiczenie 4
    var listEx4 = document.querySelectorAll(".ex4 > ul > li");
    console.log('cwiczenie 4');
    console.log(listEx4);
    for(var c=0; c < listEx4.length; c++){ //ha ha suche
        //sposób 1
        //listEx4[c].dataset.id = c+1;
        //sposób 2
        listEx4[c].setAttribute("dataset-id",c+1); //warning dla c+1 że mieszam typy :(
    }

//ćwiczenie 5
    var listEx5 = document.querySelectorAll(".ex5 > ul > li");
    for(var d=0; d < listEx5.length; d++){
        if(listEx5[d].dataset.direction == null){
            listEx5[d].dataset.direction = 'up';
        }
        if ((d+1) % 2 == 0){
            listEx5[d].style.backgroundColor = '#00FF00';
        }
        if ((d+1) % 3 == 0){
            listEx5[d].style.textDecoration = 'underline';
        }
    }
    listEx5[5-1].classList.add('big');

});