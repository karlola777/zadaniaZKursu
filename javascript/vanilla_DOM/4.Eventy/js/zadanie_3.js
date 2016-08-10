/* Dodatkowe utrudnienie do zadania:
 * napisać skrypt tak, żeby obsługiwał
 * dowolną liczbę html-owych zestawów button i span
 * (dlatego rozwiązanie jest takie brudne) :( */
document.addEventListener("DOMContentLoaded", function () {
    var allButtons = document.querySelectorAll('button');
    var allCounts = new Array(allButtons.length).fill(0);
    for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            /*"i" z pętli podane do funkcji powyżej
            z jakiegoś powodu nie jest liczbą
            - chyba całym przyciskiem???
             */
            //pobieram liczbę z html-owego id przycisku
            var btnId = parseInt(this.id.replace('button',''));
            allCounts[btnId-1] += 1;//to funkcja widzi z nadrzędnej
            var counter = document.querySelector('#'+this.id+' + p > span');
            counter.innerHTML = allCounts[btnId-1];

        });
    }
});