// Variables
// ============================================================================
const navItems_1 = document.querySelectorAll("div.bt");
const navItems_2 = document.querySelectorAll("li.mt");
const nav_m = document.getElementById("nav_m");
const pgs = [document.getElementById("hm"), document.getElementById("abt"), document.getElementById("pgt"), document.getElementById("cont"), document.getElementById("game")];
const logo = document.getElementById("tp")
const refer = document.getElementById("refer");

// Swap Pages
// ============================================================================
const Swap_d = () => {
    navItems_1.forEach((nav) => {
        nav.addEventListener("click", (e) => {
            for (var i = 0; i < pgs.length; i++) {
                if (!pgs[i].classList.contains("closed")) {
                    pgs[i].classList.add("closed");
                }
            }

            switch (nav.dataset.bsTitle) {
                case "Home":
                    pgs[0].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Home", { expires: 1, sameSite: 'Strict' })
                    break;

                case "About":
                    pgs[1].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "About", { expires: 1, sameSite: 'Strict' })
                    break;

                case "Projects":
                    pgs[2].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Projects", { expires: 1, sameSite: 'Strict' })
                    break;

                case "Contact":
                    pgs[3].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Contact", { expires: 1, sameSite: 'Strict' })
                    break;

                case "Game":
                    pgs[4].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Game", { expires: 1, sameSite: 'Strict' })
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

                    // Update Cookies
                    Cookies.set("current_tab", "Home", { expires: 1, sameSite: 'Strict' })
                    break;

                case "a":
                    pgs[1].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "About", { expires: 1, sameSite: 'Strict' })
                    break;

                case "p":
                    pgs[2].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Projects", { expires: 1, sameSite: 'Strict' })
                    break;

                case "c":
                    pgs[3].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Contact", { expires: 1, sameSite: 'Strict' })
                    break;

                case "g":
                    pgs[4].classList.remove("closed");

                    // Update Cookies
                    Cookies.set("current_tab", "Game", { expires: 1, sameSite: 'Strict' })
                    break;

                default:
                    break;
            }
        });
    });
};

// Mobile menu toggler
// ============================================================================
const space = () => {
    window.addEventListener("scroll", (e) => {
        if (e.type === "scroll") {
            if (!nav_m.classList.contains("out")) {
                nav_m.classList.add("out");
            }
        }

        setTimeout(() => {
            if (nav_m.classList.contains("out")) {
                nav_m.classList.remove("out");
            }
        }, 1000);
    });
};

// Tootltip Handler
// ============================================================================
const tooltipList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipList.forEach(each => {
    const tooltip = new bootstrap.Tooltip(each, {
        offset: [0, 15],
    })
})

// Refer to Contact Page
// ============================================================================
refer.addEventListener("click", () => {
    for (var i = 0; i < pgs.length; i++) {
        if (!pgs[i].classList.contains("closed")) {
            pgs[i].classList.add("closed");
        }
    }

    // Contact Page
    pgs[3].classList.remove("closed");

    // Update Cookies
    Cookies.set("current_tab", "Contact", { expires: 1, sameSite: 'Strict' })
});


// ===========================================================================
//                          GAME SCRIPT
// ===========================================================================

// DOM Elements
// ============================================================================
const s_player = document.querySelectorAll("div.s_player input")
const board = document.querySelectorAll("div.player")
const to_mode = document.querySelector("button.to_mode")
const to_game = document.querySelector("button.to_game")
const next = document.querySelector("button.next")
const pages = document.querySelectorAll("div.box_1 > div")
const exit = document.querySelectorAll("button.exit_game")
const mode_1 = document.querySelector("input#one_player")
const mode_2 = document.querySelector("input#two_players")
const game_cont = document.querySelector("div.tictactoe")
const msg = document.querySelector("div.turns > h1")


// Variables
// ============================================================================

// Players
var player_one = "X"
var player_two = "O"
var moves_count = 0
var available_moves = Array.from({ length: 9 }, (value, index) => index)
var mode = 0


// FXN
// ================================================================================
// Select player
const game_mode = () => {
    s_player.forEach((each, index) => {
        each.addEventListener("click", () => {
            index === 0 ? s_player[1].checked = false : s_player[0].checked = false

            // Update mode
            mode = index + 1
        })
    })
}

// Delay Loop
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Random Play by Computer
const randomPlay = async () => {
    // Repeat Play
    while (mode < 1) {
        // Available Positions
        let positions = Array.from({ length: 9 }, (value, index) => index)

        // Loop
        for (var i = 0; i < 9; i++) {
            // Generate positions
            let index = Math.floor(Math.random() * positions.length)
            let chosenPosition = positions[index]

            // Update UI
            board[chosenPosition].innerText = i % 2 === 0 ? player_one : player_two;

            // Remove used slots
            positions.splice(index, 1);

            if (mode > 0) {
                break
            }

            // Wait
            await sleep(1000)
        }

        // Wait
        await sleep(1000)

        // Clear board
        board.forEach((each) => {
            each.innerText = ""
            // each.classList.remove("p1", "p2")
        })
    }
}

// Check Win
const checkWin = () => {
    // Winning Chances
    const winningChances = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal (Top-left to Bottom-right)
        [2, 4, 6], // Diagonal (Top-right to Bottom-left)
    ];

    for (const chances of winningChances) {
        const [a, b, c] = chances;
        if (
            board[a].innerText !== "" &&
            board[a].innerText === board[b].innerText &&
            board[a].innerText === board[c].innerText
        ) {
            return board[a].innerText === "X" ? "Player One Wins" : mode === 1 ? "Computer Wins" : "Player 2 Wins";
        }
    }

    // Check for tie
    if (available_moves.length === 0) {
        return "Its A Tie";
    }

    // No winner yet
    return null;
}

// Computer's Input
const ai_play = () => {
    if (available_moves.length > 0) {
        // Generate positions
        let index = Math.floor(Math.random() * available_moves.length)
        let ai_move = available_moves[index]

        // Update UI
        board[ai_move].innerText = "O"
        board[ai_move].classList.add("disable")

        // Update moves
        moves_count++
        available_moves.splice(index, 1)

        // Check Win
        const game_status = checkWin()
        if (game_status) {
            // Update msg
            msg.innerText = game_status

            // Disable board for both players
            game_cont.classList.add("disable")
        } else {
            // Enable Board for Player One
            game_cont.classList.remove("disable")
            msg.innerText = "Player One's Turn"
        }
    }
}

// Player's Input
const board_play = () => {
    // Listen for clicks
    board.forEach((each, index) => {
        each.addEventListener("click", (e) => {
            // Update board
            e.target.innerText = moves_count % 2 === 0 ? player_one : player_two;
            e.target.classList.add("disable")

            // Update moves
            moves_count++
            available_moves.splice(available_moves.indexOf(index), 1)

            // Check Win
            const game_status = checkWin()
            if (game_status) {
                // Update msg
                msg.innerText = game_status

                // Disable board for both players
                game_cont.classList.add("disable")
            } else {
                // Check if mode === 1
                if (mode === 1) {
                    // Disable board for Player One
                    game_cont.classList.add("disable")

                    // Update msg
                    msg.innerText = "Computer's Turn"

                    // Call AI
                    setTimeout(ai_play, 1000);
                } else {
                    msg.innerText = moves_count % 2 === 0 ? "Player One's Turn" : "Player Two's Turn";
                }
            }
        })
    })
}

// Game Controls
const gc = () => {
    // Button 1
    to_mode.addEventListener("click", (e) => {
        // Flip
        pages[0].classList.add("hide")
        pages[1].classList.remove("hide")
    })

    // To Instructions
    next.addEventListener("click", () => {
        // Check if any mode was selected
        if (mode_1.checked || mode_2.checked) {
            // Select mode one
            pages[1].classList.add("hide")
            pages[2].classList.remove("hide")
        } else {
            const popoverTriggerList = document.querySelector('[data-bs-toggle="popover"]')
            const popover = new bootstrap.Popover(popoverTriggerList, {
                offset: [0, 15],
            })

            // Show warning
            popover.show()

            // hide warning
            setTimeout(() => {
                popover.hide()
                popover.dispose()
            }, 2000);
        }
    })

    // Button 2
    to_game.addEventListener("click", () => {
        // Flip
        pages[2].classList.add("hide")
        pages[3].classList.remove("hide")

        // Clear board
        board.forEach((each) => {
            each.innerText = ""
        })

        // Update Msg
        msg.innerText = "Player One's Turn"

        // start game
        board_play()
    })

    // Exit game
    exit.forEach((each, index) => {
        each.addEventListener("click", (e) => {
            // Flip
            console.log(pages[e.target.dataset.index].classList)
            pages[e.target.dataset.index].classList.add("hide")
            pages[0].classList.remove("hide")

            // Clear mode
            s_player[0].checked = false
            s_player[1].checked = false

            // Clear board
            if (index === 2) {
                board.forEach((each) => {
                    each.innerText = ""
                    // each.classList.remove("p1", "p2")
                })
            }

            // Reset moves_count
            moves_count = 0

            // Reset mode
            if (mode > 0) {
                mode = 0

                // Init random Play
                randomPlay()
            }
        })
    })
}


// =================================================================================
//                                Init
// =================================================================================

window.onload = () => {
    space();
    Swap_d();
    Swap_m();
    game_mode()
    randomPlay()
    gc()
}