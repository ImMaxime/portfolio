document.addEventListener('DOMContentLoaded', () => {
    // Get the body element

    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var targetOffset = targetElement.offsetTop;
            var duration = 1500;
            var easing = function(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t };
            var start = window.pageYOffset;
            var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            function scroll() {
                var now = 'now' in window.performance ? performance.now() : new Date().getTime();
                var time = Math.min(1, ((now - startTime) / duration));
                var timeFunction = easing(time);
                window.scrollTo(0, Math.ceil((timeFunction * (targetOffset - start)) + start));
                if (time < 1) requestAnimationFrame(scroll);
            }
            requestAnimationFrame(scroll);
        });
    });

    var navLinks = document.querySelectorAll('.navbar a');
    var navbarOffset = document.get;
    window.addEventListener('scroll', function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        navLinks.forEach(function(navLink) {
            var targetId = navLink.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var headerOffset = (targetId == "section-hero") ? document.querySelector('header').offsetHeight : "";
            if (targetElement.offsetTop - headerOffset <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition) {
                navLink.parentElement.classList.add('active');
            } else {
                navLink.parentElement.classList.remove('active');
            }
        });
    });


    const body = document.body;
 
    // Scroll event handler function
    const handleScroll = () => {
        let root = document.querySelector(":root")
        // Change the background and font color based on scroll position
        // if (window.pageYOffset >= 512) {
        //     root.style.setProperty('--background', 'var(--black)');
        //     root.style.setProperty('--font-color', 'var(--white)');
        // } else {
        //     root.style.setProperty('--background', 'var(--white)');
        //     root.style.setProperty('--font-color', 'var(--black)');
        // }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call the drawText function with the title element and the text to be displayed
    drawText(document.getElementById('title'), "Maxime\nLétourneau Pelletier.");

    // Initial check
    handleScroll();

    // Call the setMarquee function with the desired duration
    setMarquee(12);
});

// Function to set up marquee animations
function setMarquee(duration) {
    let marquees = document.querySelectorAll(".marquee");
    for (let i = 0; i < marquees.length; i++) {
        let marquee = marquees[i];
        let items = marquee.querySelectorAll("ul");
        let endPosition = Array.from(items).reduce((total, e) => total + e.offsetWidth, 0);
        let animations = [];

        // Create animations for each item in the marquee
        for (let j = 0; j < items.length; j++) {
            let e = items[j];
            animations.push(
                e.animate([
                     // Set the starting and ending transform properties for the animation
                     { transform: `translateX(${(e.className.includes('reverse')) ? -e.offsetWidth : -e.offsetWidth}px)` },
                     { transform: `translateX(${endPosition}px)` },
                    ], {
                        // Set the duration, iterations, delay, and direction properties for the animation
                        duration: duration * 1000,
                        iterations: Infinity,
                        delay: -((duration / items.length) * j) * 1000,
                        direction: (e.className.includes('reverse')) ? "reverse" : "normal",
                    }
                )
            );
        }

        // Pause and play animations on mouseover and mouseout events
        marquee.onmouseover = () => animations.forEach((e) => { e.pause()});
        marquee.onmouseout = () => animations.forEach((e) => { e.play()});
    }
} 

// Function to draw text in a container
function drawText(container, text) {
    text = text.split('').reverse();
    interval = setInterval(addLetter, 50);

    function addLetter() {
        var letter = text.pop();
        container.innerHTML += (letter == "\n") ? '<br>' : letter;
        if (text.length == 0) {
            clearInterval(interval);
            container.innerHTML += '  |';
            setInterval(function() {
                var lastChar = container.innerHTML.substr(container.innerHTML.length - 1);
                container.innerHTML = (lastChar == "|") ? container.innerHTML.slice(0, -1) : container.innerHTML + "|";
            }, 500);
        }
    }
}

function sendMail(){
    let name = document.getElementById('contact_name').value;
    let reason = document.getElementById('contact_reason').value;
    let phone = document.getElementById('contact_phone').value;
    let message = document.getElementById('contact_message').value;
    reason  ||= "Portfolio Contact Form";
    phone   &&= "Phone: "+phone+"\n";
    message &&= "\n" + message;
    if(name) message += "\n" + name

    let href = `mailto:maxlp12@gmail.com?subject=${reason}&body=${message}`;
    window.open(href);
}
