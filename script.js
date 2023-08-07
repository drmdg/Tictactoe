let tabuleiro=['a','b','c','d','e','f','g','h','i'];
let roundcounter=0;
const player = (name, marker) => {
  return{name,marker}
};


function passavez(){
  if(actualPlayer==playerOne){
    actualPlayer=playerTwo;
  }else{
    actualPlayer=playerOne;
  }
}

function iswinner(){
  if( (tabuleiro[0]==tabuleiro[1] && tabuleiro[1]==tabuleiro[2]) ||
    (tabuleiro[3]==tabuleiro[4] && tabuleiro[4]==tabuleiro[5]) ||
    (tabuleiro[6]==tabuleiro[7] && tabuleiro[7]==tabuleiro[8]) ||
    (tabuleiro[0]==tabuleiro[3] && tabuleiro[3]==tabuleiro[6]) ||
    (tabuleiro[1]==tabuleiro[4] && tabuleiro[4]==tabuleiro[7]) ||
    (tabuleiro[2]==tabuleiro[5] && tabuleiro[5]==tabuleiro[8]) ||
    (tabuleiro[6]==tabuleiro[4] && tabuleiro[4]==tabuleiro[2]) ||
    (tabuleiro[0]==tabuleiro[4] && tabuleiro[4]==tabuleiro[8]) ){
      let aux=document.getElementById('modal');
      aux.innerText=`WINNER : ${actualPlayer.name}`;
      aux.style.cssText="display:flex"
    }else if(roundcounter==8){
      let aux=document.getElementById('modal');
      aux.innerText=`IT'S A TIE!`;
      aux.style.cssText="display:flex"
    }
}

function playround(e){
  if(e.target.innerText!="X" && e.target.innerText!="O" ){
    e.target.innerText=`${actualPlayer.marker}`;
    tabuleiro[e.target.id]=`${actualPlayer.marker}`
    iswinner();
    passavez();
    roundcounter++;
  }
 
  
}


for(let i=0;i<tabuleiro.length;i++){
    let newdiv=document.createElement('div')
    newdiv.classList.add('box');
    newdiv.setAttribute('id',`${i}`)
    let tabuleiro=document.getElementsByClassName('tabuleiro')[0];
    tabuleiro.appendChild(newdiv);
    document.getElementsByClassName('box')[i].addEventListener('click',playround);
}

function hidemodal(){
  let aux=document.getElementById('modal');
      aux.innerText=`WINNER : ${actualPlayer.name}`;
      aux.style.cssText="display:none"
      tabuleiro=['a','b','c','d','e','f','g','h','i'];
  let boxes = document.getElementsByClassName('box');
  for (let box of boxes){
    box.innerText="";
  }
    roundcounter=0;
}
playerOne= player("Diego Souza","X");
playerTwo= player("Computer","O");
var actualPlayer=playerOne;
document.getElementsByClassName('container')[0].addEventListener('dblclick',hidemodal)




