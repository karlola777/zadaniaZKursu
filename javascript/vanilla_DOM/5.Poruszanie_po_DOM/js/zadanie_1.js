/**
 * Created by Jacek on 2016-01-12.
 */

    /* visibility: hidden nie narusza położenia reszty elementów
    * visibility: none przesuwa wszystko (element jest jak niszczony) */
document.addEventListener('DOMContentLoaded',function(){
    var aList = document.querySelectorAll('a');
    for (var i = 0; i < aList.length; i++){
        aList[i].addEventListener('click', function(){
            var tsmuk = this.nextElementSibling;
           tsmuk.classList.toggle('hidden');
        })
    }
});
