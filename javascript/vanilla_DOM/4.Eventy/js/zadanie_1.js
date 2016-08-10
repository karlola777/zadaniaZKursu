/**
 * Created by Jacek on 2016-01-12.
 */

/*  Dzięki eventowi nie ma znaczenia, gdzie wkleimy js w html-u,
 bo js i tak zaczeka na załadowanie się strony.
  Jeśli skrypt jest w <head>, FF wyświetla warning, że
  metoda getPreventDefault jest przestarzała.
  Jeśli na końcu <body>, to chyba wewnętrznie FF nie potrzebuje nic preventować :) */
 document.addEventListener("DOMContentLoaded", function() {
	var menu = document.querySelector("#menu");
	var paragraf = document.querySelector("p");

	menu.classList.add("menu");
	paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
	
});