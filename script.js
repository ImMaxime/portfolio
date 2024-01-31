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
    let marquees = document.querySelectorAll(".marquee");
    for (let i = 0; i < marquees.length; i++){
        let marquee = marquees[i];
        let items = marquee.querySelectorAll("ul");
        let endPosition = Array.from(items).reduce((total, e) => total + e.offsetWidth, 0);
        let animations = [];

        for ( j = 0; j < items.length; j++) {
            let e = items[j];
            animations.push( 
                e.animate([
                     { transform: `translateX(${(e.className.includes('reverse')) ? -e.offsetWidth : -e.offsetWidth}px)` },
                     { transform: `translateX(${endPosition}px)` },
                    ], {
                    duration: duration*1000,
                    iterations: Infinity,
                    delay : -((duration/items.length) * j)*1000,
                    direction : (e.className.includes('reverse')) ? "reverse" : "normal"
                })
            );
        }
        console.log(animations);
        marquee.onmouseover = () => animations.forEach((e) => { e.pause()})
        marquee.onmouseout = () => animations.forEach((e) => { e.play()})
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