//Javascript - Folder 4 - Obiekty
//Ćwiczenia 1 i 2
console.log('----- Samochód -----');

var Car = function(make, color, plate){
	this.make = make;
	this.color = color;
	this.plate = plate;
	
	this.drive = function()
    {
	return("jedzie prosto ");
	};
	
	this.honk= function()
    {
	return("pip piiip");
    };

	this.addOverhaul = function(info)
    {
        this.overhauls.push(info);
    };

    this.getOverhauls = function()
    {
        console.log(this.overhauls);
    };
};

var mercedes = new Car("Mercedes", "blue", "WWA4547");
console.log(mercedes.make + " " + mercedes.drive() + " i ma kolor " + mercedes.color + " i rejestrację "+ mercedes.plate
+". " + mercedes.honk());

mercedes.overhauls = ['01/01/2015'];

//funkcje ze stacka do zabawy datą, przerobione na osadzone jedna w drugiej
//http://stackoverflow.com/a/29348676
function RandomDate(){
    function RandomTime(){
    var startDate = new Date(2012,0,1).getTime();
    var endDate =  new Date(2015,0,1).getTime();
    var spaces = (endDate - startDate);
    var timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
    }
    var month = RandomTime().getMonth();
    var day = RandomTime().getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    /* Warning phpstorma: primitive value from constructor ("new Date")
    will be lost ("String"), ale przecież tak tutaj chcę? */
    return String(day + '/' + month + '/' + (RandomTime().getFullYear()));
}

//console.log(RandomDate); // to tylko drukuje, że to jest funkcja :)
console.log(RandomDate());

for (var i=0;i<10;i++){
    mercedes.addOverhaul(RandomDate());
}
mercedes.getOverhauls();

//Ćwiczenie 3
console.log('----- Robot -----');
var Robot = function(name, age){
    this.name = name;
    this.age = age;

    this.sayHello = function()
    {
        console.log('Hello, I am '+this.name+'.');
    }
};

r = new Robot('Zelmer', 2);
r.sayHello();
r.name = 'Sony';
r.sayHello();

//Ćwiczenie 4
console.log('----- Student -----');
//przedmiot i indeks wpisane na twardo dla wygody później ;p
var Student = function(firstname, lastname, age, uniYear, subjects, gradebook){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.uniYear = uniYear;
    this.subjects = [
        'transmutacja',
        'eliksiry',
        'obrona przed czarną magią',
        'historia mugoli',
        'numerologia',
        'runy'
    ];
    this.gradebook = [1, 2, 3, 4, 5];

    this.zakuj = function(id)
    {
        console.log('Zakuwam: '+this.subjects[id]);
    };
    this.odpowiedz = function(subject)
    {
        console.log('Odpowiadam z: '+subject);
    }

};

Ron = new Student('Ron','Weasley', 15, 2, undefined, [2, 4, 5, 5, 4, 3, 2, 4, 5]);
console.log('Przedmioty studenta '+Ron.firstname+' '+Ron.lastname+': '+Ron.subjects);
Ron.zakuj(2);
Ron.odpowiedz(3);

var Examiner = function(firstname, lastname, subject){
    this.firstname = firstname;
    this.lastname = lastname;
    this.subject = subject;

    this.pytaj = function(){
        console.log('Pytam z: '+subject);
    };

    this.wystaw_ocene = function(){
        var grade = Math.floor(Math.random()*6 + 1);
        console.log('Ocena:'+grade);
        return grade; //potrzebne obiektowi Exam
    };

};

console.log('----- Egzamin -----');

var Exam = function(s_firstname, s_lastname, e_firstname, e_lastname, subject){
    this.start = function(){
        this.s = new Student(s_firstname, s_lastname);
        this.e = new Examiner(e_firstname, e_lastname, subject);
    };

    this.ocen = function(){
        var ocena = this.e.wystaw_ocene();
        //ocena trafia do indeksu, a przedmiot do wykazu przedmiotów - bo tak ;)
        if (this.s.gradebook.push(ocena)
        && this.s.subjects.push(this.e.subject)){
            console.log('Egzamin z przedmiotu: '+this.e.subject+' zakończony oceną: '+ocena);
        }
    }
    
};
//Hagrid chyba nie ma nazwiska ;)
var ex = new Exam('Hermiona','Granger', 'Hagrid',undefined,'środowisko przyrodnicze');
ex.start();
//nie można zobaczyć indeksu przed startem egzaminu, bo jeszcze nie ma Studenta
console.log('Indeks studenta przed:');
console.log(ex.s.gradebook);
console.log('Wykaz przedmiotów studenta '+ex.s.firstname+' '+ex.s.lastname+' przed:');
console.log(ex.s.subjects);
ex.e.pytaj();
//Student ogarnia dopiero po pytaniu, z czego jest egzamin ;)
ex.s.odpowiedz(ex.e.subject);
ex.ocen();
console.log('Indeks studenta po:');
console.log(ex.s.gradebook);
console.log('Wykaz przedmiotów studenta po:');
console.log(ex.s.subjects);
