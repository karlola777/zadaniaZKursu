/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function() {
    var btnAdd = document.querySelector('a.button');
    var list = document.querySelector('ul.menu');

    btnAdd.addEventListener('click', function(){
        var li = document.querySelectorAll('li');
        var existingli = li.length;
        var newLi = document.createElement('li');//<li></li>
        newLi.innerHTML="w momencie dodania bylo " + existingli + " elementow";
        list.appendChild(newLi);
    })
});