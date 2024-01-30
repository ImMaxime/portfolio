document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const handleScroll = () => {
        let root = document.querySelector(":root")
        if (window.pageYOffset >= 512) {
            root.style.setProperty('--background', 'var(--black)');
            root.style.setProperty('--font-color', 'var(--white)');
        } else {
            root.style.setProperty('--background', 'var(--white)');
            root.style.setProperty('--font-color', 'var(--black)');
        }
    };

    window.addEventListener('scroll', handleScroll);
    drawText(document.querySelector('.glitch'), "Maxime\nLétourneau\nPelletier.");
    // Initial check
    handleScroll();

});


function drawText(container, text){
    text = text.split('').reverse();
    console.log(container, text);
    interval = setInterval(addLetter, 50);

    function addLetter(){
        var letter = text.pop();
        container.innerHTML += (letter == "\n") ? '<br>' : letter; 
        if (text.length == 0) {
            clearInterval(interval);
            container.innerHTML += '  |';
            setInterval(function(){
                var lastChar = container.innerHTML.substr(container.innerHTML.length - 1);
                container.innerHTML = (lastChar == "|") ? container.innerHTML.slice(0, -1) : container.innerHTML+"|";
            },500)
        }
    }
}