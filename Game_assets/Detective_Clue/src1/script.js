// SUSPECTS//

let mrGreen = {
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image: "https://static.wikia.nocookie.net/cluedo/images/6/6d/2016C4.jpg/revision/latest/scale-to-width-down/328?cb=20200927103538",
  color: "green",  
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "https://static.wikia.nocookie.net/cluedo/images/a/a1/2016C3.jpg/revision/latest?cb=20200927103538",
  color: "white",
};

let profPlum = {
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image: "https://static.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest/scale-to-width-down/337?cb=20200927103539",
  color: "purple",
};

let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://static.wikia.nocookie.net/cluedo/images/5/54/2016C1.jpg/revision/latest/scale-to-width-down/335?cb=20200927103537",
  color: "red",
 };

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://static.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest/scale-to-width-down/342?cb=20200927103538",
  color: "blue",
 };

let mrMustard = {
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description: "He is a former football player who tries to get by on his former glory",
  image: "https://static.wikia.nocookie.net/cluedo/images/2/21/2016C2.jpg/revision/latest?cb=20200927103537",
  color: "yellow",
};

// WEAPONS //

let rope = {
  name: "rope",
  weight: 10,
};

let knife = {
  name: "knife",
  weight: 8,  
};

let candlestick = {
  name: "candlestick",
  weight: 2,
};

let dumbbell = {
  name: "dumbbell",
  weight: 30,
};

let poison = {
  name: "poison",
  weight: 2,
};

let axe = {
  name: "axe",
  weight: 15,
};

let bat = {
  name: "bat",
  weight: 13,
};

let trophy = {
  name: "trophy",
  weight: 25,  
};

let pistol = {
  name: "pistol",
  weight: 20,
};

// ROOMS //

let diningRoom  = {
  name: "Dining Room",  
};

let conservatory = {
  name: "Conservatory",
};

let kitchen = {
  name: "Kitchen",
};

let study = {
  name: "Study",
};

let library = {
  name: "Library",
};

let billiardRoom = {
  name: "Billiard Room",
};

let lounge = {
  name: "Lounge",
};

let ballroom = {
  name: "Ballroom",
};

let hall = {
  name: "Hall",
};

let spa = {
  name: "Spa",
};

let livingRoom = {
  name: "Living Room",
};

let observatory = {
  name: "Observatory",
};

let theater = {
  name: "Theater",
};

let guestHouse = {
  name: "Guest House",
};

let patio = {
  name: "Patio",
};

// CREACIÓN DE ARRAYS //

let suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

let roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// FUNCION PARA SELECCIONAR ALEATORIAMENTE UN SUSPECT, UNA WEAPON Y UN ROOM //

function pickMystery() {
  let suspect = suspectsArray[Math.floor(Math.random()* (suspectsArray.length - 1))]
  let weapon = weaponsArray[Math.floor(Math.random()* (weaponsArray.length - 1))]
  let room = roomsArray[Math.floor(Math.random()* (roomsArray.length - 1))]

  return{suspect, weapon, room}
}

let mystery = pickMystery()

console.log(mystery)

//FUNCION PARA SABER QUÉ SELECCIONÓ EL USUARIO EN SUSPECT, WEAPON Y ROOM //

document.querySelector('button').onclick = guess;

function guess(){
  let guessedSuspect = document.getElementById('suspect').value;
  let guessedWeapon = document.getElementById('weapon').value;
  let guessedRoom = document.getElementById('room').value;
  
  console.log(guessedSuspect,guessedWeapon,guessedRoom)
  
  if(
    guessedSuspect === mystery.suspect.name 
    && guessedWeapon === mystery.weapon.name 
    && guessedRoom === mystery.room.name){
    document.body.innerHTML += 'You are rigth! You win! :)'
  } else {
    document.body.innerHTML += 'Ups... you are wrong!'
    document.body.innerHTML += `${mystery.suspect.name} killed Mr. Boddy in the ${mystery.room.name} with the ${mystery.weapon.name}.`
    document.body.innerHTML += `<div><img src="${mystery.suspect.image}"/></div>`
  }
  
  guessedSuspect = '';
  guessedWeapon = '';
  guessedRoom = '';  
}






