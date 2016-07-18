/*
Ćwiczenie 1
W zdaniu "Mam ochotę na burgera" zamień słowo "burgera" na "sałatę".
*/
console.log('Mam ochotę na burgera'.replace('burgera','sałatę'));

/*
Ćwiczenie 2
Podany string będący adresem email rozdziel na dwie części względem elementu @.
*/
var mail = 'kontakt@coderslab.pl';
var adresat = mail.split('@');
console.log('użytkownik: '+adresat[0]+'\n'
            +'domena: '+adresat[1]);

/*
Ćwiczenie 3
Podaną tablicę złącz używając znaku "-" .
*/
console.log(adresat[0].concat('-',adresat[1]));

/*
Ćwiczenie 4
 Zamień zdanie na duże litery.
 Dodatkowe:
 Zamien tylko pierwsze litery każdego słowa na duże.
*/
var zdanie = 'Puchatek spojrzał na obydwie łapki. ' +
    'Wiedział, że jedna z nich jest prawa, i wiedział jeszcze, ' +
    'że kiedy już się ustaliło, która z nich jest prawa, ' +
    'to druga była lewą, ale nigdy nie wiedział, jak zacząć.';
console.log(zdanie.toUpperCase());

function ToTitlecase(text) {
    var titleCased = '';
    var split = text.split(' ');
    for (var i = 0; i < split.length;i++){
        fl = split[i].charAt(0);
        fluc = fl.toUpperCase();
        var word = split[i].replace(fl,fluc);
        titleCased += word + ' ';
    }
    return titleCased;
}

console.log(ToTitlecase(zdanie));

//nieudane regexy :(

// /\w/igm - rozbija na pojedyncze litery, zm. ą na a, ł & ż ignorowane
// /[a-z]+\s/igm - pomija polskie znaki :(
//https://mathiasbynens.be/notes/es6-unicode-regex

/*Ćwiczenie 5
Ćwiczenie 5
Napisz funkcję, która odwróci znaki w przekazynym do niej jako argument stringu.
 */

function Reverse(str){
    return str.split('').reverse().join('');
}

console.log(Reverse('Hello'));
console.log(Reverse('3< zażółć gęślą jaźń'));
/*
## Ćwiczenie 6
 Napisz funkcję ```getMiddleLetter(string)```, która będzie zwracać środkwą literę z podanego napisu. jeżeli napis ma nieparzystą ilość liter zwróć 2 środkowe litery.
*/

function getMiddleLetter(str){
    var l = str.length;
    if (l % 2 == 0){
        //l/2+1 bo slice nie zwraca prawego końca przedziału
        return str.slice(l/2-1,l/2+1);
    }
    else return str.charAt(l/2-0.5);
}

console.log(getMiddleLetter('parzyste')); //zy
console.log(getMiddleLetter('nieparzyste')); //r