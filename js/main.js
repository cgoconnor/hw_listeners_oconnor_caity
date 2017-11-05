var heading = document.getElementById('title');
var paragraph = document.getElementById('text').innerHTML;
var num = 1;

heading.addEventListener('click', function () {
    var i = num++;
    console.log('This is click number ' + i);
});
