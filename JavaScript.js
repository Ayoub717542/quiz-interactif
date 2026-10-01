// const questions = [
//     {
//         question: "What does HTML stand for?",
//         answers:[
//             {text: "Hyper Transfer Markup Language",correct:false},
//             {text: "Hyper Text Markup Language",correct:true},
//             {text: "High Tech Mark Language",correct:false},
//             {text: "Home Tool Markup Language",correct:false}
//         ]
//     },
//     {
//         question: "In CSS, what does the flex-grow property control?",
//         answers:[
//             {text: "The direction of the flex container",correct:false},
//             {text: "How much the item will grow relative to others",correct:true},
//             {text: "Alignment on the cross-axis",correct:false},
//             {text: "The size of the container",correct:false}
//         ]
//     },
//     {
//         question: "Which HTTP status code indicates “Unauthorized”?",
//         answers:[
//             {text: "403",correct:false},
//             {text: "404",correct:false},
//             {text: "401",correct:true},
//             {text: "500",correct:false}
//         ]
//     },
//     {
//         question: "What does SQL stand for?",
//         answers:[
//             {text: "Simple Query Language",correct:false},
//             {text: "Sequential Question Logic",correct:false},
//             {text: "Server Query List",correct:false},
//             {text: "Structured Query Language",correct:true}
//         ]
//     }
// ];
// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-button");
// const nextButton = document.getElementById("next-btn");
// let currentQuestionIndex = 0
// let score = 0;

// function showQuestion(){
//     resetState();
//     let currentQuestionIndex= questions[currentQuestionIndex];
//     let question = currentQuestionIndex+1;
//     questionElement.innerHTML=question +". "+ currentQuestionIndex.question;

//     currentQuestionIndex.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML=answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct+ answer;correct
//         }
//         button.addEventListener("click",selectAnswer)
        
//     });
// }

// function start(){
//     currentQuestionIndex=0;
//     score=0;
//     nextButton.innerHTML+ "Next";
//     showQuestion();
// }
//   function resetState(){
//     nextButton.style.display=none;
//     while(answerButton.firstChild){
//         answerButton;removeChild(answerButton.firstChild);
//     }


//   }
// start();
const changecolor = document.getElementById("lorem");
changecolor.style.backgroundColor="red"

