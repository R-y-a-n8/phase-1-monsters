const createmonster = document.querySelector (`create-monster`)
const createmonst = document.querySelector (`monster-container`)
const createmonste = document.querySelector ("back")
const createmonstr = document.querySelector ("forward")

function fetchMonsters() {
    fetch('http://localhost:3000/monsters') 
      .then((response) => response.json())
      
      .then((data) => displayMonsters(data))
    
      .catch((error) => console.error('Error fetching monsters:', error));
}

function displayMonsters(monsters){
    const monsterContainer = document.querySelector('#monster-container')


    monsters.forEach((monster) => {
        //a div element for the monster card
        const monsterCard = document.createElement('div');
        monsterCard.classList.add('monster-card');

        //an h2 element for the monster name
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = monster.name;
        
        //a p element for the monster description
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = monster.description;

        //name and description to the monster card
        monsterCard.appendChild(nameHeading);
        monsterCard.appendChild(descriptionParagraph);

        //Append the monster card to the monster container
        monsterContainer.appendChild(monsterCard)

    });

 }
// Call the fetchMonsters function to retrieve and display monsters
fetchMonsters();
 