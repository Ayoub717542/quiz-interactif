let current = 0;
let count=0;
let interval;
const questionelement= document.getElementById("question")
const choices= document.getElementById("choices")
const timerElement= document.getElementById("timer")
document.getElementById('next-btn').style.display = 'none';

const quizData= [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin"],
      answer:"Paris"
    },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
        answer: "William Shakespeare"
    },
      {
        question: "Which animal is known as the King of the Jungle?",
        choices: ["Tiger", "Lion", "Elephant"],
        answer: "Lion"
    },
    {
        question: "What is the capital city of Japan?",
        choices: ["Tokyo", "Kyoto", "Osaka"],
        answer: "Tokyo"
    }
];
function sswitcharray(){

    for(let i = quizData.length - 1; i >= 0; i--){
        let partner = i - 1;  
         if (partner < 0) partner = 0;   
        let temp = quizData[i]
        quizData[i]=quizData[partner]
        quizData[partner]=temp
    }
}
sswitcharray()
function introducequestions(){
    clearInterval(interval);
    let timer=10;
   interval  = setInterval(() => {
        timer--
        if(timer<=0){
            clearInterval(interval)
            const allbuttons=choices.querySelectorAll('button')
            for (let i = 0; i < allbuttons.length; i++) {
               allbuttons[i].disabled=true
                allbuttons[i].classList.toggle("disabled_buttons")
                  if(allbuttons[i].textContent === quizData[current].answer){
                     allbuttons[i].classList.toggle("correct_answer")
    }
            }
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';
        }
        timerElement.textContent=timer
    }, 1000);
    
choices.innerHTML = '';
timerElement.textContent = timer;
questionelement.textContent = quizData[current].question;
quizData[current].choices.forEach(choice => {
  const button = document.createElement('button');
  button.textContent = choice;
  button.addEventListener('click',function () {
  console.log(choice);
  if (choice == quizData[current].answer){
    count++
    const buttons = choices.querySelectorAll('button');
    buttons.forEach(btn => {
    btn.disabled = true;
    btn.classList.toggle("disabled_buttons")
    if(btn.textContent === quizData[current].answer){
        btn.classList.toggle("correct_answer")
    }
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';

    clearInterval(interval);
});
  }else{
    const buttons = choices.querySelectorAll('button');
    buttons.forEach(btn => {
    btn.disabled = true;
    btn.classList.add("disabled_buttons");
    if (btn.textContent === quizData[current].answer) {
      btn.classList.add("correct_answer");
    }
  });
  document.getElementById('next-btn').style.display = 'block';
  } 
})
  choices.appendChild(button);
});}

document.getElementById('next-btn').addEventListener('click', () => {
  current++;
  if (current >= quizData.length) {
document.getElementById('quiz-container').style.display = 'none';
document.getElementById('result').style.display = 'block';
document.getElementById('score').textContent = `${count} / ${quizData.length}`;
}else{
  introducequestions();
}   
});
function restartQuiz() {
  current = 0;        
  count = 0;          
  document.getElementById('result').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  introducequestions();     
}

introducequestions();