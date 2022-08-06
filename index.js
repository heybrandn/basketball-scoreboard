let homeScore = document.getElementById("hScore")
let guestScore = document.getElementById("gScore")
let hScore = 0
let gScore = 0

function checkScore() {
    if (hScore > gScore) {
        document.getElementById("hScore").style.color = "yellow"
        document.getElementById("gScore").style.color = "#F94F6D"
    } else if (hScore == gScore) {
        document.getElementById("hScore").style.color = "#F94F6D"
        document.getElementById("gScore").style.color = "#F94F6D"
    } else if (hScore < gScore) {
        document.getElementById("hScore").style.color = "#F94F6D"
        document.getElementById("gScore").style.color = "yellow"
    }
}
// Home team points
function hAdd1() {
    hScore += 1
    homeScore.textContent = hScore
    checkScore()
}

function hAdd2() {
    hScore += 2
    homeScore.textContent = hScore
    checkScore()
}

function hAdd3() {
    hScore += 3
    homeScore.textContent = hScore
    checkScore()
}

function hSub1() {
    hScore -= 1
    homeScore.textContent = hScore
    checkScore()
}

// Guest team points

function gAdd1() {
    gScore += 1
    guestScore.textContent = gScore
    checkScore()
}

function gAdd2() {
    gScore += 2
    guestScore.textContent = gScore
    checkScore()
}

function gAdd3() {
    gScore += 3
    guestScore.textContent = gScore
    checkScore()
}

function gSub1() {
    gScore -= 1
    guestScore.textContent = gScore
    checkScore()
}

// Reset all points

function reset() {
    gScore = 0
    hScore = 0
    homeScore.textContent = hScore
    guestScore.textContent = gScore
    checkScore()
}
