let score_H = parseInt(localStorage.getItem('score_H')) || 0;
let score_T = parseInt(localStorage.getItem('score_T')) || 0;



function incrementScore_H() {
    score_H++;
    updateScore_H();
}

function decrementScore_H() {
    if (score_H > 0) {
        score_H--;
        updateScore_H();
    }
}

function updateScore_H() {
    // Met à jour le contenu de l'élément avec l'ID "scoreValue_H"
    document.getElementById('scoreValue_H').innerText = score_H;

    // Enregistre le score dans le stockage local
    localStorage.setItem('score_H', score_H.toString());
}

// Appel initial pour afficher le score au chargement de la page


function incrementScore_T() {
    score_T++;
    updateScore_T();
}

function decrementScore_T() {
    if (score_T > 0) {
        score_T--;
        updateScore_T();
    }
}

function updateScore_T() {
    // Met à jour le contenu de l'élément avec l'ID "scoreValue_H"
    document.getElementById('scoreValue_T').innerText = score_T;

    // Enregistre le score dans le stockage local
    localStorage.setItem('score_T', score_T.toString());
}

function totalValue(){
    let total = score_H + score_T;
    document.getElementById("totalValue").innerText = total;
}

// Appel initial pour afficher le score au chargement de la page
updateScore_H();
updateScore_T();
totalValue()



