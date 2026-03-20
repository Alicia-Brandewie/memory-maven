/*-------------- Constants -------------*/

let CARDS = [
    "♡", "♡", "♥", "♥",
    "❀", "❀", "✿", "✿",
    "✧", "✧", "✦", "✦",
    "🌣", "🌣", "☀", "☀",
]

/*---------- Variables (state) ---------*/

let click = 0

let firstCardClicked

let firstCardId

let secondCardClicked

let secondCardId

let pairs = 0

let tries = 0

let randomizedSymbols = '';

let gameOver = false

/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll(".card")

const cardbacksElement = document.querySelectorAll(".cardBack")

const triesElement = document.querySelector("#visual-count-tries")

const pairsElement = document.querySelector("#visual-count-pairs")

const bannerMessage = document.querySelector("#banner-message")

const startBoard = document.querySelector(".board")

/*-------------- Functions -------------*/

function shuffleCards(CARDS) {
    for (let i = 0; i < CARDS.length; i++) {
        randomizedSymbols += CARDS[i];
    }
}

function randomize(CARDS) {
    for (let i = CARDS.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [CARDS[i], CARDS[j]] = [CARDS[j], CARDS[i]];
    }
}
randomize(CARDS);
shuffleCards(CARDS);

cardEls.forEach((card, banana) => {
    CARDS = Array.from(randomizedSymbols)
    card.textContent = CARDS[banana]
});

cardEls.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (!gameOver) {
            if (click > 1) {
                click = 0
                // setTimeout(checkforMatch, 3000)
                firstCardClicked = undefined
                secondCardClicked = undefined
            }

            if (firstCardClicked === undefined) {
                firstCardClicked = event.target.innerText;
                firstCardId = event.target.id
                cardEls[firstCardId].classList.toggle('hidden')
                click++

            } else {
                if (firstCardClicked && event.target.id === firstCardId) {
                    secondCardClicked = undefined
                }
                else {
                    secondCardClicked = event.target.innerText;
                    secondCardId = event.target.id
                    cardEls[secondCardId].classList.toggle('hidden')
                    click++
                    checkforMatch()

                }
            };
        }
    });
});

const checkforMatch = () => {
    if (firstCardClicked === secondCardClicked) {
        pairs++
        pairsElement.textContent = "Pairs: " + pairs;
    } else {
        setTimeout( () => {
        cardEls[firstCardId].classList.toggle('hidden')
        cardEls[secondCardId].classList.toggle('hidden')
        },
        1000)

    }
    tries++
    triesElement.textContent = "Tries: " + tries;

    endingTheGame()
};



const resetButtonElement = document.querySelector('#resetButton')

const resetGame = () => {
    window.location.reload()
}
resetButtonElement.addEventListener('click', resetGame);

const endingTheGame = () => {
    if (pairs === 8 && tries <= 12) {
        bannerMessage.innerText = "Winner!"
        gameOver = true
    } else if (pairs < 8 && tries === 12) {
        bannerMessage.textContent = "Lose. Try again!"
        gameOver = true
    }
}