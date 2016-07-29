/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded',function(){
    var uldiv = document.querySelectorAll('.listContainer');
    for (var i=0;i < uldiv.length;i++){
        uldiv[i].addEventListener('mouseover', function(){

            var kids = this.firstElementChild.children;
            for (var i=0;i < kids.length;i++) {
                kids[i].style.backgroundColor='#b4d455';
            }
            kids[0].style.backgroundColor='red';
            kids[kids.length-1].style.backgroundColor='blue';
        }

        //div[i].addEventListener('mouseout', function(){
        //
        //        var kids = this.firstElementChild.children;
        //        for (var i=0;i < kids.length;i++) {
        //            kids[i].style.backgroundColor='none';
        //        }
        //    }

        )
    }

});