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
    setMarquee(12);
});


function setMarquee(duration){
    let marquee = document.querySelectorAll(".marquee");
    for (let i = 0; i < marquee.length; i++){
        let elements = marquee[i].querySelectorAll("ul");
        let endPosition = 0;

        for (let j = 0; j < elements.length; j++) {
            endPosition += elements[j].offsetWidth;
        }
        console.log(endPosition);
        for ( j = 0; j < elements.length; j++) {
            let e = elements[j];
            let direction = (e.className.includes('reverse')) ? "reverse" : "normal";
            let start = (e.className.includes('reverse')) ? -e.offsetWidth : -e.offsetWidth;
            let val = (duration/elements.length) * j;
            e.animate([
                // keyframes
                { transform: `translateX(${start}px)` },
                { transform: `translateX(${endPosition}px)` },
              ], {
                // timing options
                duration: duration*1000,
                iterations: Infinity,
                delay : -val*1000,
                direction : direction
            });
            console.log(e.getAnimations.pl);
        }
    }
}
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