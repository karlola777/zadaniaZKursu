/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function(){
    var aList = document.querySelectorAll('a');
    for (var i = 0; i < aList.length; i++){
        aList[i].addEventListener('click', function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            var prnt = this.parentElement;
            prnt.style.backgroundColor = randomColor;
        })
    }
});