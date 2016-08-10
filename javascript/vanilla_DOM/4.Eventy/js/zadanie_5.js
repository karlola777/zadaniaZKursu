document.addEventListener("DOMContentLoaded", function () {
    var allBoxes = document.querySelectorAll('.box');
    for (var i=0; i<allBoxes.length;i++){
        allBoxes[i].addEventListener('click', function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor=randomColor;
        })
    }
});