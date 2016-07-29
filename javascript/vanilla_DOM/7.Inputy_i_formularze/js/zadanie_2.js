/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var checkboxes = document.querySelectorAll('[type=checkbox]');
    var sum = document.getElementById('price');
    for (var a = 0; a < checkboxes.length; a++) {
        checkboxes[a].addEventListener('click', function () {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (this.hasAttribute('data-price')) {
                //jest z ceną wiec sprawdzam czy zaznaczony aby dodac lub odjąć od sumy
                //pobieram cenę
                var checkedPrice = decimals(parseFloat(this.dataset.price));
                var suma = decimals(parseFloat(sum.innerHTML));
                if (this.checked) {
                    //dodaje do sumy
                    suma += checkedPrice;
                } else {
                    //odejmuje od sumy
                    suma -= checkedPrice;
                }

                //aktualizuje sume
                sum.innerHTML = decimals(suma).toFixed(2) + 'zł';
            }
        });
    }

    var checkboxesSpecial = document.querySelectorAll('input:not([data-price])');
    //takie checkboxy są 2 na stronie
    checkboxesSpecial[0].addEventListener('click', function () {//checkbox 1 zaznacz all
        this.checked = false;//oznaczam go jako nie zaznaczony aby nie byl na zmiane zaznaczony i odznaczony
        //klikniety pierwszy wiec zaznaczam wszystkie checkboxy które mają cenę
        for (var a = 0; a < checkboxes.length; a++) {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (checkboxes[a].checked == false && checkboxes[a].hasAttribute('data-price')) {
                checkboxes[a].click();//symuluje klik
            }
        }
    });
    checkboxesSpecial[1].addEventListener('click', function () {//checkbox 2 wyczysc all
        this.checked = false;//oznaczam go jako nie zaznaczony aby nie byl na zmiane zaznaczony i odznaczony
        //klikniety pierwszy wiec zaznaczam wszystkie checkboxy które mają cenę
        for (var a = 0; a < checkboxes.length; a++) {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (checkboxes[a].checked && checkboxes[a].hasAttribute('data-price')) {
                checkboxes[a].click();
            }
        }
    });

    var btn = document.querySelector('button');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert(document.getElementById('price').innerHTML);
    });
});

function decimals(number) {
    //return Number(Math.round(number+'e2')+'e-2');
    return Math.round(number * 100) / 100;
}