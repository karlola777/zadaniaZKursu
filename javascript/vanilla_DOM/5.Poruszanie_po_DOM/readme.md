# JavaScript - Cwiczenia DOM - Poruszanie się po DOM

Zadania z poruszania się po DOM.

Katalog ma osobne strony dla odpowiednich zadań. 
Ćwiczenia powinny być rozwiązane w pliku dla odpowiedniego zadania (wszystkie pliki są już stworzone). 
Pamiętaj, żeby pisać czytelny i dobrze sformatowany kod. 

## Ćwiczenie 1
W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po klinknięciu w którykolwiek z nich element, który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się ```null```).

## Ćwiczenie 2 
W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po klikniękiu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

## Ćwiczenie 3
W pliku znajdują się 3 listy (każda osadzona w elemencie ```div```). Po najechaniu myszką na element ```div``` zmienic się mają kolory tła elementów jego listy. Odpowiednio:
1. Pierwszy element w liście ma mieć kolor czerwony.
2. Ostatni element w liście ma mieć kolor niebieski.
3. Wszystkie inne elementy mają mieć kolor zielony.

Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie divy musi być założony ten sam event.
2. Elementy listy mają być wyszukane w zależności od ```this```.

## Ćwiczenie 4
Znajdź i zapisz do zmiennych następujące elementy:
1. Element o klasie ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o id ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o atrybucie ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel ilość dzielci przez 2 i zaokrąglij do góry).
4. Div o klasie ```forth``` -> jego rodzic -> jego pierwsze dziecko o klasie ```article``` -> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.
