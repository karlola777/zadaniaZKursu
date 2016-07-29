# JacaScript - Cwiczenia DOM - Inputy i Formularze

Zadania sprawdzające umiejętność korzystania z inputów i formularzy.

Każde zadanie posiada swój własny plik HTML i powinno być rozwiązane w osobnym pliku JavaScript (puste pliki są już przygotowane w odpowiednim folderze).

## Ćwiczenie 1

Na stronie znajduje się formularz do zamówienia. Znajduje się w nim sekcja odpowiedzialna za wystawienie faktury. 
Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".

## Ćwiczenie 2
Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki. 
Cena każdego z dodatków jest trzymana w atrybucie ```data-price```. 
Napisz takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza wyświetlił się alert z wyliczoną kwotą.
Zwróć uwagę na dwa specjalne checkboxy: none - powinien odznaczyć wszystkie inne opcje, a all - powinien zaznaczyć wszystkie inne opcje (poza none).

## Ćwiczenie 3
Na stronie znajduje się select i 3 obrazki. 
Każdy z obrazków jest przypisany do jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.

## Ćwiczenie 4
Na stronie znajduje się formularz, który odsyła do strony ```http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl```.
Napisz walidację tego formularza w taki sposób, żeby wysyłany był tylko i wyłącznie wtedy, kiedy spełnione zostaną nastepujące warunki:
1. Email zawiera w sobie @,
2. Imię jest dłuższe niż 5 znaków,
3. Nazwisko jest dłuższe niż 5 znaków,
4. Hasło i hasło 2 są identyczne,
5. Checkbox musi być zaznaczony.

Dodatkowe. Hasło ma co najmniej 5 znaków (w tym co najmniej jedną liczbę i jedną lietrę).

Zauważ, jak dane wyświetlane są na stronie docelowej (jak ich nazwy są skorelowane z kodem HTML). Spróbuj pozmieniać atrybuty ```name``` i zobacz, jak się zmieniają wysyłane dane (np. sprawdź, co się stanie, jak dwa inputy mają taką samą nazwę).
Jest to bardzo ważne, ponieważ w ten sposób będziecie się zazwyczaj porozumiewać z back-endowcami.

## Ćwiczenie 5
Na stronie znajdue się tablica z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
1. Obie drużyny muszą być różne,
2. Liczba goli powinna być nieujemna.

Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informaja o wyniku spotkania powinna pojawić się w tablicy.

## Ćwiczenie 6
Walidacja karty kredytowej.

Zadanie polega na walidacji kart kredytowych wpisywanych w formularz na stronie. Walidacja ma następować w czasie rzeczywistym (czyli po wprowadzeniu każdego numeru).
Nazwa karty ma być wpisana jak tylko jest możliwe jej ustalenie, poprawność karty ma byc pokazana po wpisaniu odpowiedniej liczby cyfr. 

![Przyklad](https://raw.github.com/)

### Zasady rozpoznawania kart:
1. Karty Visa zaczynają się od cyfry 4.
1. Karty Mastercard zaczynają się od cyfry 5.
1. Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.

### Zasady walidacji kart:
1. Karty Visa mają od 13 do 16 cyfr.
1. Karty Mastercard mają równo 16 cyfr.
1. Karty American Express mają równo 15 cyfr.

Zasady walidacji kart są uproszczone (nie powinniście ich stosować w rzeczywistych projektach).
Jezeli chcesz poznać prawdziwe zasady walidacji kart kredytowych, to są one opisane tutaj: 
https://en.wikipedia.org/wiki/Bank_card_number
https://en.wikipedia.org/wiki/Luhn_algorithm
