let scroll_elements = [];

function scrolling() {
    console.log("Scrolling");
    scroll_elements.forEach(element => {
        let in_anim = element.getAttribute("data-scroll");
        let out_anim = in_anim.replace("in", "out");
        let top = element.getBoundingClientRect().top;
        let bottom = element.getBoundingClientRect().bottom;

        if (top < window.innerHeight) {
            if (element.className !== in_anim) {
                element.className = in_anim;
            }
        }
        if (bottom > window.innerHeight) {
            element.className = out_anim;
        }
    });
}


function AnimInit() {
    console.log("Initialized");
    scroll_elements = document.querySelectorAll('[data-scroll]');
    window.addEventListener("scroll", scrolling);
}

