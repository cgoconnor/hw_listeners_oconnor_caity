//Listens for mouseover, changes quote on scroll
var quotes = [
    'The best ideas come as jokes. Make your thinking as funny as possible. &mdash;David Ogilvy',
    'Google has the functionality of a really complicated Swiss Army knife, but the home page is our way of approaching it closed. It&rsquo;s simple, it&rsquo;s elegant. You can slip it in your pocket, but it&rsquo;s got the great doodad when you need it. &mdash;Marissa Mayer',
    'A beef filet cooked for 15 hours by 30 cooks doesn&rsquo;t necessarily taste better than a cheeseburger &mdash;Oliver Reichenstein',
    'If you can&rsquo;t explain it simply, you don&rsquo;t understand it well enough. &mdash;Albert Einstein',
    'You can use an eraser on the drafting table or a sledge hammer on the construction site. &mdash;Frank Lloyd Wright',
    'Make things as simple as possible, but not simpler &mdash;Albert Einstein',
    'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools. &mdash;Douglas Adams',
    'Think more. Design less. &mdash;Ellen Lupton'
];
var quote = document.getElementById('quote');
var quoteNum = 1;
quote.addEventListener('mouseover', function () {
    if (quoteNum < quotes.length) {
        quote.innerHTML = quotes[quoteNum];
        quoteNum++;
    } else {
        quote.innerHTML = quotes[0];
    }
});
// Listens for click on image, changes image
var images = [
    '<img src="img/annie-spratt-137960.jpg" alt="Spools of ribbon">',
    '<img src="img/annie-spratt-372202.jpg" alt="Exterior brick wall with window">',
    '<img src="img/lucas-huffman-371692.jpg" alt="Two penguins sliding on snow">',
    '<img src="img/norbert-von-niman-354528.jpg" alt="Mountains with snow from above">',
    '<img src="img/romello-williams-385888.jpg" alt="Crack in ice, teal color">',
    '<img src="img/sean-parker-360081.jpg" alt="Natural arch at night with milky way in background">',
    '<img src="img/vitaliy-lyubezhanin-385454.jpg" alt="Hands with henna designs">'
];
var image = document.getElementById('images');
var num = 1;
image.addEventListener('click', function () {
    if (num < images.length) {
        image.innerHTML = images[num];
        num++;
    } else {
        image.innerHTML = images[0];
    }
});
// Listens for submit, changes color of footer
var colorForm = document.getElementById('colorForm');
var colorInput = document.getElementById('color');
var colorText = document.getElementById('not-recognized');
var footer = document.getElementById('footer');
colorForm.addEventListener('submit', function (event) {
    if (colorInput.value === '1') {
        event.preventDefault();
        colorText.innerHTML = '';
        footer.style.backgroundColor = 'PaleGreen';
    } else if (colorInput.value === '2') {
        event.preventDefault();
        colorText.innerHTML = '';
        footer.style.backgroundColor = 'Lightblue';
    } else if (colorInput.value === '3') {
        event.preventDefault();
        colorText.innerHTML = '';
        footer.style.backgroundColor = 'MediumOrchid';
    } else if (colorInput.value === '4') {
        event.preventDefault();
        colorText.innerHTML = '';
        footer.style.backgroundColor = 'orange';
    } else if (colorInput.value === '5') {
        event.preventDefault();
        colorText.innerHTML = '';
        footer.style.backgroundColor = 'pink';
    } else {
        event.preventDefault();
        colorText.innerHTML = 'Oops, try again!';
        footer.style.backgroundColor = 'white';
    }
});
