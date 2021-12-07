/* Règles:

Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. 
Le résultat d’un lancer est ajouté au ROUND.  
Lors de son tour, le joueur peut décider à tout moment de:
    -Cliquer sur l’option “Hold”, qui permetd’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
    -Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.Le premier joueur qui atteint les 100 points sur global gagne le jeu. */

//Initialisation jeu
let newGame = document.getElementById('newGame');
let iconRoundPlayerOne = document.getElementById('roundPlayerOne');
let iconRoundPlayerTwo = document.getElementById('roundPlayerTwo');
iconRoundPlayerOne.style.display = "none";
iconRoundPlayerTwo.style.display = "none";


// Initialisation player 1
let PlayerOne = {
    totalRandomScore : 0,
    globalScore : 0,
    round : true,
}

// Initialisation player 2
let PlayerTwo = {
    totalRandomScore : 0,
    globalScore : 0,
    round : false,
}


let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');

function getRandomInt() {
  return  Math.floor(Math.random() * 6) + 1;
}


newGame.addEventListener('click', function() {
  iconRoundPlayerOne.style.display = "inline-block";
  iconRoundPlayerTwo.style.display = "none";
  roundPlayerOne = true;
  PlayerOne.totalRandomScore.innerHTML = 0;
  PlayerOne.globalScore.innerHTML = 0;
  PlayerTwo.totalRandomScore.innerHTML = 0;
  PlayerTwo.globalScore.innerHTML = 0;
  



rollDice.addEventListener('click', ()=> {
  
  randomInt = getRandomInt();
  // Start round player 1
    if(PlayerOne.round == true){
        PlayerOne.totalRandomScore +=  randomInt;

      if (randomInt == 1){
      PlayerOne.totalRandomScore = 0;
      PlayerOne.round = false;
      PlayerTwo.round = true;
      iconRoundPlayerOne.style.display = "none";
      iconRoundPlayerTwo.style.display = "inline-block";
      }

        displayTotalRandomScoreOne = document.getElementById('scoreRoundPlayerOne');
        displayTotalRandomScoreOne.innerHTML = PlayerOne.totalRandomScore;

        console.log(" One : "+randomInt);
        console.log(" One : "+PlayerOne.round);
    

    // Start round player 2  
     } else if(PlayerTwo.round == true){
        PlayerTwo.totalRandomScore +=  randomInt;

        if (randomInt == 1){
          PlayerTwo.totalRandomScore = 0;
          PlayerTwo.round = false;
          PlayerOne.round = true;
          iconRoundPlayerTwo.style.display = "none";
          iconRoundPlayerOne.style.display = "inline-block";
          }

        displayTotalRandomScoreTwo = document.getElementById('scoreRoundPlayerTwo');
        displayTotalRandomScoreTwo.innerHTML = PlayerTwo.totalRandomScore;

        console.log(" Two : "+ randomInt);
        console.log(" Two : "+PlayerTwo.round);
    }

    EachRoll();
  
});


hold.addEventListener('click', function() {
  // End round player 1
    if(PlayerOne.round == true){
        PlayerOne.globalScore += PlayerOne.totalRandomScore;
        displayGlobalScoreOne = document.getElementById('globalPlayerOne');
        displayGlobalScoreOne.innerHTML = PlayerOne.globalScore;
        playerWin("player one")
        
    
        PlayerOne.totalRandomScore =  0;
        displayTotalRandomScoreOne.innerHTML = PlayerOne.totalRandomScore;
        PlayerOne.round = false;
        PlayerTwo.round = true; 

        iconRoundPlayerOne.style.display = "none";
        iconRoundPlayerTwo.style.display = "inline-block";

    } else if(PlayerTwo.round == true){
        PlayerTwo.globalScore += PlayerTwo.totalRandomScore;
        displayGlobalScoreTwo = document.getElementById('globalPlayerTwo');
        displayGlobalScoreTwo.innerHTML = PlayerTwo.globalScore;
        playerWin("player two" );
       
    
        PlayerTwo.totalRandomScore =  0;
        displayTotalRandomScoreTwo.innerHTML = PlayerTwo.totalRandomScore;
        PlayerOne.round = true; 

        iconRoundPlayerOne.style.display = "inline-block";
        iconRoundPlayerTwo.style.display = "none";
    }
   
});

});


function EachRoll() {
  if (randomInt == 1) {
     document.getElementsByClassName('dice')['0'].removeAttribute('hidden',' true');
  } else {
      document.getElementsByClassName('dice')['0'].setAttribute('hidden', 'true');
  }
  
  if (randomInt == 2) {
      document.getElementsByClassName('dice')['1'].removeAttribute('hidden', 'true');
  } else {
      document.getElementsByClassName('dice')['1'].setAttribute('hidden', 'true');
  }
  if (randomInt == 3) {
     document.getElementsByClassName('dice')['2'].removeAttribute('hidden', 'true');
     }
  else {
      document.getElementsByClassName('dice')['2'].setAttribute('hidden', 'true');
  }
  if (randomInt == 4) {
      document.getElementsByClassName('dice')['3'].removeAttribute('hidden', 'true');
  } else {
      document.getElementsByClassName('dice')['3'].setAttribute('hidden', 'true');
  } 
  if (randomInt == 5) {
         document.getElementsByClassName('dice')['4'].removeAttribute('hidden', 'true');
  } else {
         document.getElementsByClassName('dice')['4'].setAttribute('hidden', 'true');
     }
  if (randomInt == 6) {
      document.getElementsByClassName('dice')['5'].removeAttribute('hidden', 'true');
     
  } else {
      document.getElementsByClassName('dice')['5'].setAttribute('hidden', 'true');
     }
       
}


function playerWin(namePlayer){
  if (PlayerTwo.globalScore >= 100 || PlayerOne.globalScore >=100){
    Swal.fire({
      imageUrl: 'img/trophyWin.png',
      imageAlt: 'Winners',
      text : 'Yeeeaaah ' + namePlayer + ' you win !!!',
      confirmButtonColor : '#129377',
      confirmButtonText : 'Play again'
    }).then((result) => {
       //Read more about isConfirmed 
      if (result.isConfirmed) {
        document.location.reload();
      } 
    })
    }
}

function rulesGame(){
    Swal.fire({
      imageUrl: 'img/light_bulb.jpg',
      imageAlt: 'https://www.vecteezy.com/',
      imageWidth: 300,
      title : 'Rules',
      html :
      '<p> Each player has a temporary score (<b>ROUND</b>) and an overall score (<b>GLOBAL</b>). </br> On each turn, the player has his <b>ROUND</b> initialized to 0 and can roll a dice as many times as he wishes. The result of a throw is added to the <b>ROUND</b>. </br> During his turn, the player can decide at any time to:  </P><ul> <li> Click on the “<b>Hold</b>” button, which allows the points from the <b>ROUND</b> to be sent to the <b>GLOBAL</b>. It will then be the other player\'s turn. </li>  <li> Roll the dice. If he rolls a 1, his <b>ROUND</b> score is lost and his turn is over. </li> </ul><p>The first player to reach <b>100 points</b> overall wins the game.</p>',
      confirmButtonColor : '#129377',
      confirmButtonText : "Let's go!",
      showClass: {
        popup: 'animate__animated animate__slideInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
}

let rulesGameBtn = document.getElementById('rulesGameBtn');

rulesGameBtn.addEventListener('click', ()=> {
  rulesGame();
})








