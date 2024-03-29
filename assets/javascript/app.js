const trivQuest = {
    q1: "Which Pro driver drives a mustang?",
    q2: "Which driver put a Ferrari engine in their car?",
    q3: "Which is the most popular drift chassis",
    q4: "What does competition judgement heavily lean on?",
    q5: "What YouTuber built an S15 Pro drift car with Enjuku Racing?",
}

const ansOptions = {
    q1: ["Forest Wang", "Vaughn Gittin Jr.", "Michael Essa", "Manuel Vacca"],
    q2: ["Ken Block", "Adam LZ", "Jeff Jones", "Ryan Tureck"],
    q3: ["240sx", "350z", "FR-S", "Mustang"],
    q4: ["Few Adjustments", "Clipping Points", "Lead Lap", "Follow Lap"],
    q5: ["Adam LZ", "Taylor Ray", "Chris Rudnik", "Cleatus McFarland"],
}

const answer = {
    q1: "Vaughn Gittin Jr.",
    q2: "Ryan Tureck ",
    q3: "240sx",
    q4: "Lead Lap",
    q5: "Adam LZ",
}

// Timer display
const time = ["1:00", "0.59", "0.58", "0.57", "0.56", "0.55", "0.54", "0.53", "0.52", "0.51", "0.50", "0.49", "0.48", "0.47", "0.46", "0.45", "0.44", "0.43", "0.42", "0.41", "0.40", "0.39", "0.38", "0.37", "0.36", "0.35", "0.34", "0.33", "0.32", "0.31", "0.30", "0.29", "0.28", "0.27", "0.26", "0.25", "0.24", "0.23", "0.22", "0.21", "0.20", "0.19", "0.18", "0.17", "0.16", "0.15", "0.14", "0.13", "0.12", "0.11", "0.10", "0.09", "0.08", "0.07", "0.06", "0.05", "0.04", "0.03", "0.02", "0.01"]

// Global variables
const timer = 45
const correct = 0
const wrong = 0

// Display buttons/rules on load
document.getElementById('startBtn').innerHTML = `
<button>Start Tivia!</button>
`
document.getElementById('rules').innerHTML = `
<h4>You will have 45 seconds to complete all 5 questions. Once finished click 'Submit answers!'
Any unanswered questions will be counted wrong if timer hits 0.</h4>
`

// Game start
const displayQuest = function () {
    for(i = 0; i < trivQuest.length; i++) {
        document.getElementById('question').innerHTML = `
        <h2>${trivQuest.q1}</h2>
        `
    }

}

const startGame = function () {
    document.getElementById('tryBtn').innerHTML = ''
    document.getElementById('question').innerHTML = ''
    document.getElementById('startBtn').innerHTML = ''
    document.getElementById('rules').innerHTML = ''
    document.getElementById('subBtn').innerHTML = `
    <button>Submit Answers!</button>
    `
    displayQuest()
}

// End game function
const endGame = function () {
    document.getElementById('subBtn').innerHTML = ''
    document.getElementById('question').innerHTML = `
    <h2>Correct = ${correct}/5</h2>
    `
    document.getElementById('tryBtn').innerHTML = `
    <button>Try Again!</button>
    `
}

// Restar Game
const restGame = function () {
    startGame()
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startGame)
document.getElementById('subBtn').addEventListener('click', endGame)
document.getElementById('tryBtn').addEventListener('click', restGame)