async function get() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
  
    const cardsContainer = document.querySelector('.liste');
  
    // Clear the existing content inside cardsContainer
  
    // Iterate over each user in the data and create a list item for them
    data.results.forEach(user => {
      const flipcardElement = document.createElement("div");
      flipcardElement.classList.add("list");
      flipcardElement.innerHTML = `
        <div class="image"><img src="${user.picture.medium}" alt="Profile Picture"></div>
        <div class="info">
          <div class="name"><h5>${user.name.first} ${user.name.last}</h5></div>
          <div class="statut"><label>${user.location.street.name}</label></div>
        </div>
      `;
      cardsContainer.appendChild(flipcardElement);
    });
  }
  
  function loop() {
    for(i=0 ; i<20 ; i++) {
        get();
    }
  } 

  loop()