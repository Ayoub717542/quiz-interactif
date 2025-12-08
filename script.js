let bonnesReponses = 3;
let total = 5;

document.getElementById("score").textContent =
    "Score : " + bonnesReponses + " / " + total;


    document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});



let current = 1;   
let total = 10;  
let bar = document.getElementById("progress");

function updateProgress() {
    let pourcentage = (current / total) * 100;
    bar.style.width = pourcentage + "%";
}


updateProgress();


let userAnswers = [];    
let correctAnswers = []; 

// qse inser
function enregistrerReponse(user, correct) {
    userAnswers.push(user);
    correctAnswers.push(correct);
}

// resulta
function afficherReponses() {
    let box = document.getElementById("resultats");

    box.innerHTML = "<h3>Résultats :</h3>";

    userAnswers.forEach((rep, i) => {
        box.innerHTML += `
            <p>Question ${i+1} : 
               Votre réponse : ${rep} — 
               Correct : ${correctAnswers[i]}
            </p>
        `;
    });
}









