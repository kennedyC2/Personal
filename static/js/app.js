const navItems_1 = document.querySelectorAll("li.bt");
const navItems_2 = document.querySelectorAll("li.mt");
const nav_m = document.getElementById("nav_m");
const pgs = [document.getElementById("hm"), document.getElementById("abt"), document.getElementById("wk"), document.getElementById("pgt"), document.getElementById("cont")];

// Swap Pages
const Swap_d = () => {
    navItems_1.forEach((nav) => {
        nav.addEventListener("click", () => {
            for (var i = 0; i < pgs.length; i++) {
                if (!pgs[i].classList.contains("closed")) {
                    pgs[i].classList.add("closed");
                }
            }

            switch (nav.innerHTML) {
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
                    pgs[3].classList.remove("closed");
                    break;

                case "Contact":
                    pgs[4].classList.remove("closed");
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
                    setTimeout(() => {
                        nav_m.classList.add("out");
                    }, 1000);
                    break;

                case "i":
                    pgs[1].classList.remove("closed");
                    setTimeout(() => {
                        nav_m.classList.add("out");
                    }, 1000);
                    break;

                case "w":
                    pgs[2].classList.remove("closed");
                    setTimeout(() => {
                        nav_m.classList.add("out");
                    }, 1000);
                    break;

                case "p":
                    pgs[3].classList.remove("closed");
                    setTimeout(() => {
                        nav_m.classList.add("out");
                    }, 1000);
                    break;

                case "c":
                    pgs[4].classList.remove("closed");
                    setTimeout(() => {
                        nav_m.classList.add("out");
                    }, 1000);
                    break;

                default:
                    break;
            }
        });
    });
};

// Space
const space = () => {
    window.addEventListener("touchstart", () => {
        if (nav_m.classList.contains("out")) {
            nav_m.classList.remove("out");
            setTimeout(() => {
                nav_m.classList.add("out");
            }, 1000 * 5);
        }
    });

    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 0) {
            if (!nav_m.classList.contains("out")) {
                nav_m.classList.add("out");
            }
        }

        if (window.scrollY == 0) {
            if (nav_m.classList.contains("out")) {
                nav_m.classList.remove("out");
                setTimeout(() => {
                    nav_m.classList.add("out");
                }, 1000 * 5);
            }
        }
    });
};

space();
Swap_d();
Swap_m();
