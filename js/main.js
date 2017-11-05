var heading = document.getElementById('title');
var paragraph = document.getElementById('text');
var num = 1;

heading.addEventListener('click', function () {
    var i = num++;
    paragraph.innerHTML = 'This is click number ' + i;
});
