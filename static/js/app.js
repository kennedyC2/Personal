const navItems_1 = document.querySelectorAll("div.bt");
const navItems_2 = document.querySelectorAll("li.mt");
const nav_m = document.getElementById("nav_m");
const pgs = [document.getElementById("hm"), document.getElementById("abt"), document.getElementById("pgt"), document.getElementById("cont"), document.getElementById("wk")];
const logo = document.getElementById("tp")

// Swap Pages
const Swap_d = () => {
    navItems_1.forEach((nav) => {
        nav.addEventListener("click", (e) => {
            for (var i = 0; i < pgs.length; i++) {
                if (!pgs[i].classList.contains("closed")) {
                    pgs[i].classList.add("closed");
                }
            }

            console.log(nav)

            switch (nav.dataset.bsTitle) {
                case "Home":
                    pgs[0].classList.remove("closed");
                    break;

                case "About":
                    pgs[1].classList.remove("closed");
                    break;

                case "Work":
                    pgs[2].classList.remove("closed");
                    break;

                case "Projects":
                    pgs[2].classList.remove("closed");
                    break;

                case "Contact":
                    pgs[3].classList.remove("closed");
                    break;

                default:
                    break;
            }
        });
    });
};

const Swap_m = () => {
    navItems_2.forEach((nav) => {
        nav.addEventListener("click", () => {
            for (var i = 0; i < pgs.length; i++) {
                if (!pgs[i].classList.contains("closed")) {
                    pgs[i].classList.add("closed");
                }
            }

            switch (nav.classList[1]) {
                case "h":
                    pgs[0].classList.remove("closed");
                    nav_m.classList.remove("out");
                    break;

                case "a":
                    pgs[1].classList.remove("closed");
                    pgs[1].style.height = "auto"
                    break;

                case "p":
                    pgs[2].classList.remove("closed");
                    pgs[2].style.height = "auto"
                    break;

                case "c":
                    pgs[3].classList.remove("closed");
                    pgs[3].style.height = "auto"
                    break;

                case "b":
                    pgs[4].classList.remove("closed");
                    pgs[4].style.height = "auto"
                    break;

                default:
                    break;
            }
            setTimeout(() => {
                nav_m.classList.add("out");
            }, 1000);
        });
    });
};

// Space
const space = () => {
    let position = 0
    window.addEventListener("touchstart", () => {
        if (nav_m.classList.contains("out")) {
            nav_m.classList.remove("out");
        }
    });

    window.addEventListener("scroll", () => {
        console.log("hello")
        if (window.scrollY - position > 0) {
            if (!nav_m.classList.contains("out")) {
                nav_m.classList.add("out");
            }
            position = window.scrollY
        } else {
            if (nav_m.classList.contains("out")) {
                nav_m.classList.remove("out");
            }
            position = window.scrollY
        }
    });
};


const tooltipList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipList.forEach(each => {
    const tooltip = new bootstrap.Tooltip(each, {
        offset: [0, 15],
    })
})

window.onload = () => {
    space();
    Swap_d();
    Swap_m();
}