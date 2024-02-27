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
    drawText(document.getElementById('title'), "Maxime\nLétourneau Pelletier.");
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
                    direction : (e.className.includes('reverse')) ? "reverse" : "normal",
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

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
	 ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}