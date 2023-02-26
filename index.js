
let cards=[];
let sum = 0;
let isAlive=false;

console.log(cards);

let hasBlackJack = false;
let message="";
let messageEl = document.getElementById("msg-el");
let sumOfCards=document.querySelector("#sum-el");

let cardEl=document.querySelector("#card-el");

function startGame(){
 
  isAlive=true;
  let firstCard=getrandomCard();
  let secondCard = getrandomCard();
  cards=[firstCard,secondCard];
  sum=firstCard+secondCard;
  
  renderGame();

}
function renderGame(){

  cardEl.textContent="Cards: ";
  for(let i =0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" ";
  }
  sumOfCards.textContent="Sum: "+sum;
  if(sum<=20){
    message="do you want to draw a new card?";
    isAlive=true;
  }
  else if(sum===21){
    message="You got a black jack!!!";
    hasBlackJack=true;
  }
  else{
    message="Game over";
    isAlive=false;
  }
  
  messageEl.textContent=message;
  
  

}

function newCard(){
  if(isAlive===true && hasBlackJack===false){
    let newCard = getrandomCard();
    sum+=newCard;
    cards.push(newCard);
  
    renderGame();
  }
  
}


function getrandomCard(){
  let randomCard=Math.floor(Math.random()*13)+1;
  if(randomCard===1)
  return 11;
  else if(randomCard>10)
  return 10;
  else
  return randomCard;

}

function resetGame(){
  cards=[];
  sum=0;
  isAlive=false;
  hasBlackJack=false;
  messageEl.textContent="Want to play BlackJack?";
  cardEl.textContent="Cards: ";
  sumOfCards.textContent="Sum: ";

}
