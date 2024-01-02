let score_H = parseInt(localStorage.getItem('score_H')) || 0;

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
updateScore_H();

