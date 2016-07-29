/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function() {
   var btn = document.querySelector('#remove');
    btn.addEventListener('click', function (){
        this.parentNode.removeChild(this);
    });
});