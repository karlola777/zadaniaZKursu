/* Dodatkowe utrudnienie do zadania:
 * napisać skrypt tak, żeby obsługiwał
 * dowolną liczbę html-owych zestawów button i span
 * (dlatego rozwiązanie jest takie brudne) :( */
document.addEventListener("DOMContentLoaded", function () {
    var allButtons = document.getElementsByTagName('button');
    for(var i = 0; i < allButtons.length; i++) {
        (function(index) {
            allButtons[i].addEventListener('click', function () {
                document.querySelectorAll('span.counter')[index].innerHTML++;
                //var allCounts = document.getElementsByClassName('counter');
                //allCounts[1]=5;
                
                //pobieram liczbę z html-owego id przycisku
                //var btnId = parseInt(this.id.replace('button',''));
                /*var btnId = this.id;
                 allCounts[btnId-1] += 1;//to funkcja widzi z nadrzędnej
                 var counter = document.querySelector('#'+this.id+' + p > span');
                 counter.innerHTML = allCounts[btnId-1];*/
            });
        })(i);
    }
});