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
    // Met à jour à la fois la variable et le contenu de la balise p avec l'ID "scoreValue_H"
    document.getElementById('scoreValue_H').innerText = score_H;

    // Enregistre le score dans le stockage local sous forme de fichier JSON
    localStorage.setItem('score_H', JSON.stringify({ score: score_H }));
}

// Appel initial pour afficher le score au chargement de la page
updateScore_H();