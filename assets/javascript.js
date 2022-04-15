//gloabl variables
const startButton = document.getElementById("start-button")
const startPage = document.getElementById("start-page")
const questions = [
        //structure qs like below
  {prompt: "what is Jquery?",
    options: ["placeholder1", "placeholder2", "placeholder3", "placeholder4"],
    answer: "placeholder1"
},

{prompt: "what is Jquery?",
    options: ["placeholder1", "placeholder", "placeholder", "placeholder"],
    answer: "a"
},

{prompt: "what is Jquery? ",
    options: ["placeholder1", "placeholder", "placeholder", "placeholder"],
    answer: "a"
},

{prompt: "what is Jquery?",
    options: ["placeholder1", "placeholder", "placeholder", "placeholder"],
    answer: "a"
},
]

let score = 0

function startQuiz() {
    startPage.setAttribute("class","hide")
    document.getElementById("questions").removeAttribute("class")
    getQuestion()
}

function getQuestion() {
    let currentQuestion = questions[0]
    let titleEl = document.getElementById("question-title")
    titleEl.textContent=currentQuestion.prompt
    
    
}


startButton.addEventListener("click",startQuiz)


// for(let i = 0; i< questions.length; i++);
//     let response = (questions[i])
//     if(response == questions[i].answer){
//         score++;
//         alert("Thats Right!");
//      } else {
//             alert("Wrong!")
//         }
    
