var submit = document.getElementById( 'submit' );

submit.addEventListener( "click", function(event) {
    event.preventDefault();
    console.log( "I've clicked a link!!!" );
});
