

class Game{
    constructor(PlayerOne, PlayerTwo){
        this.PlayerOne = PlayerOne;
        this.PlayerTwo =PlayerTwo;
        this.globalScore = 0;
        this.totalRandomScore;
        this.round = false;
    }

    playerWin(){

      Swal.fire({
        imageUrl: 'img/trophyWin.png',
        imageAlt: 'Winners',
        text : 'Yeeeaaah You win !!!',
        confirmButtonColor : '#129377',
        confirmButtonText : 'Play again'
      }).then((result) => {
        /* Read more about isConfirmed */
        if (result.isConfirmed) {
          document.location.reload();
        } 
      })

      if (this.PlayerTwo.globalScore >= 100){
          Swal.fire.text = 'Player One win';
      }
      
      if (this.PlayerOne.globalScore >=100){
        Swal.fire.text = 'Player Two win';
      }
    }
  
}
  export default Game;