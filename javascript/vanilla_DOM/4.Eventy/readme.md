# JavaScript - Cwiczenia DOM - Eventy

Zadania ze zdarzeń.

Katalog ma osobne strony dla odpowiednich zadań. 
Ćwiczenia powinny być rozwiązane w pliku dla odpowiedniego zadania (wszystkie pliki są już stworzone). 
Pamiętaj, żeby pisać czytelny i dobrze sformatowany kod. 

## Ćwiczenie 1
Uruchom stronę przygotowaną dla zadania 1. Sprawdź w konsoli, czy są jakieś błędy. Następnie:
1. Przenieś tag ```<script>``` do sekcji ```<head>```. Zobacz, co się zmieniło w działaniu skryptu. Spróbuj to wytłumaczyć.
2. Stwórz event ```DOMContentLoaded``` dla elementu ```document``` i przenieś kod do środka tego eventu. Czy poprawiło to sytuację?
3. Przenieś znowu tag ```<script>``` na koniec pliku - czy jest jakaś różnica?

## Ćwiczenie 2
Na stonie znajduje się guzik. Podepnij do niego event, który na kliknięcie spowoduje, że w konsoli wyświelti się napis "Hura! Działa!".
Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

## Ćwiczenie 3
Na stronie znajdują się 3 guziki i 3 liczniki (elementy ```span``` o klasie ```counter```). Do każdego guzika dopisz event, który spowoduje, że przypisany do niego licznik zwiększy swoją wartość o 1 po klinknięciu w guzik.
Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

## Ćwiczenie 4
Na stronie znajdują się 3 guziki i jeden licznik. Napisz **jeden** wspólny event dla wszystkich guzików, który spowoduje, że licznik zwiększy wartość o 1 po klinknięciu w guzik.
Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```. 

## Ćwiczenie 5
Na stronie znajdują się 3 elementy ```div```. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła **tylko** w klikniętym divie. Użyj do tego słowa kluczowego ```this```.
Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```. 
Hint:
Żeby uzyskać losowy kolor użyj poniższego kodu:
```
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

## Ćwiczenie 6
Na stronie znajduje się jeden element ```div```. Napisz dla niego event, który będzie wypisywał położenie myszki w chwili, w której kursor znajduje się nad tym elementem.
Wyszukaj zarówno położenie myszki globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).
Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```. 

## Ćwiczenie 7
Na stronie znajdują się zagnieżdżone elmenty. Do każdego dopisane są eventy. Użyj metod ```stopPropagagation``` i ```stopImidiatePropagation``` w taki sposób, aby:
1. Wywoływały się eventy dla elementu 1 i 2 a nie wywoływał się event dla elementu 3,
2. Wywoływały się wszystkie eventy dla elementu 4 i pierwszy event dla elementu 5.

## Ćwiczenie 8
Na stronie znajdują się dwa elementy, które pokazują wielkość okna. Dopisz event do okna (element ```window```), który spowoduje, że elementy te będą pokazywały poprawne wartości nawet po przeskalowaniu okna.