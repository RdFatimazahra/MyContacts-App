
async function get(){
    const response = await fetch("user.json")
    const data = await response.json()
    console.log(data)
    
    document.querySelector(".name").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    document.querySelector("#img").src = data.results[0].picture.large;
    document.querySelector(".statut").innerHTML = data.results[0].name.title;
 }
 get()