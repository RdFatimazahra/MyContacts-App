async function getContacts() {
  const response = await fetch("https://randomuser.me/api/?results=6");
  const data = await response.json();

  const cardsContainer = document.querySelector('.row');

  data.results.forEach(user => {
    const flipcardElement = document.createElement("div");
    flipcardElement.classList.add("col-xs-12", "col-sm-6", "col-md-4");
    flipcardElement.innerHTML = `
      <div class="frontside">
        <div class="card">
          <div class="card-body text-center">
            <p><img class="img-fluid" src="${user.picture.medium}" alt="Profile Picture"></p>
            <h4 class="card-title">${user.name.first} ${user.name.last}</h4>
            <p class="card-text"><label>${user.location.street.name}</label></p>
            <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
          </div>
        </div>
      </div>
    `;
    cardsContainer.appendChild(flipcardElement);
  });
}

// Appeler la fonction au chargement de la page pour charger les contacts
document.addEventListener('DOMContentLoaded', () => {
  getContacts();
});
