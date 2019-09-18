
const trivia = {
    quest: {
    question: "Which Pro driver drives a mustang?",
    a: "Forest Wang",
    bc: "Vaughn Gittin Jr.",
    c: "Michael Essa",
    d: "Manuel Vacca",
    },
    quest: {
    question: "Which driver put a Ferrari engine in their car?",
    a: "Ken Block",
    b: "Adam LZ",
    c: "Jeff Jones",
    dc: "Ryan Tureck ",
    },
    quest: {
    question: "Which is the most popular drift chassis",
    ac: "240sx",
    b: "350z",
    c: "FR-S",
    d: "Mustang",
    },
    quest: {
    question: "What does competition judgement heavily lean on?",
    a: "Few Adjustments",
    b: "Clipping Points",
    cc: "Lead Lap",
    d: "Follow Lap",
    },
    quest: {
    question: "What YouTuber built an S15 Pro drift car with Enjuku Racing?",
    ac: "Adam LZ",
    b: "Taylor Ray",
    c: "Chris Rudnik",
    d: "Cleatus McFarland",
    }
}

const trivQuest = ["Which Pro driver drives a mustang?", "Which driver put a Ferrari engine in their car?", "Which is the most popular drift chassis", "What does competition judgement heavily lean on?", "What YouTuber built an S15 Pro drift car with Enjuku Racing?"]

const answer = ["Vaughn Gittin Jr.", "Ryan Tureck ", "240sx", "Lead Lap", "Adam LZ"]

const time = ["1:00", "0.59", "0.58", "0.57", "0.56", "0.55", "0.54", "0.53", "0.52", "0.51", "0.50", "0.49", "0.48", "0.47", "0.46", "0.45", "0.44", "0.43", "0.42", "0.41", "0.40", "0.39", "0.38", "0.37", "0.36", "0.35", "0.34", "0.33", "0.32", "0.31", "0.30", "0.29", "0.28", "0.27", "0.26", "0.25", "0.24", "0.23", "0.22", "0.21", "0.20", "0.19", "0.18", "0.17", "0.16", "0.15", "0.14", "0.13", "0.12", "0.11", "0.10", "0.09", "0.08", "0.07", "0.06", "0.05", "0.04", "0.03", "0.02", "0.01"]

// Timer
const displayQuest = function () {
    for (i = 0; i < trivQuest.length; i++) {
        document.getElementById("question").innerHTML = `
            <h4>${trivQuest[i = ]}<h4>
            `

    }
        
}
    

// document.getElementById('timer').innerHTML('')
document.getElementById('startBtn').addEventListener('click', displayQuest)
    



// Display Questions
