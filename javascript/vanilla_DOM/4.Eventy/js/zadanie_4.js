/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){
    var allButtons = document.getElementsByTagName('button');
    var counter = document.querySelector('span.counter');
    var sharedCount = 0;
    for (var i=0; i<allButtons.length; i++){
        allButtons[i].addEventListener('click', function () {
            sharedCount++;
            counter.innerHTML = sharedCount;
        });
    }
});