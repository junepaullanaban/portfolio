function myMenuFunction() {
    var menuBTH = document.getElementById("myNavMenu");

    if (menuBTH.className === "nav-menu") {
        menuBTH.className += "responsive";
    }else {
        menuBTH.className = "nav-menu";
    }
}

/*-------Dark mode-------*/

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/*-----Typing Effect-----*/

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Developer", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/*---------Scroll animation----------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: true,
});

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100});
srRight.reveal(".skill", { delay: 100});

/*------active link-------*/

const sections = document.querySelectorAll(".section[id]");

function scrollYActive() {
    
    const ScrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);