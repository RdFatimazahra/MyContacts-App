document.addEventListener('DOMContentLoaded', function() {
  const addContactForm = document.getElementById('addContactForm');

  addContactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const email = document.getElementById('email').value.trim();
    const travail = document.getElementById('travail').value.trim();
    const entreprise = document.getElementById('entreprise').value.trim();

    if (nom === '' || prenom === '' || tel === '' || email === '' || travail === '' || entreprise === '') {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire
    alert('Formulaire soumis avec succès !');
    // addContactForm.submit(); // Soumettre le formulaire si nécessaire
  });
});

