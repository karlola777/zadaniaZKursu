/**
 * Created by Jacek on 2016-01-12.
 */

 //lepiej znać na pamięć przed jQuery ;)
 //dzięki eventowi nie ma znaczenia, gdzie wkleimy js w html-u,
 //bo js i tak zaczeka na załadowanie się strony
 document.addEventListener("DOMContentLoaded", function() { //funkcja anonimowa zapodana jako drugi atrybut listenera
	var menu = document.querySelector("#menu");
	var paragraf = document.querySelector("p");

	menu.classList.add("menu");
	paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
	
});