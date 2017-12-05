var container = document.querySelector('.container')



//RANDOMIZE FUNCTION FOR CARDS POSISTION

for (var i = container.children.length; i >= 0; i--) {
       container.appendChild(container.children[Math.random() * i | 0]);
     }

//FUNCTION FOR CHECKING MATCHES AND RESETTING IF WRONG CARDS ARE MATCHED

const cards = document.querySelectorAll('.card');
const cardsArray = Array.from(cards);


emptyarray = [];
complete = [];
counter = 0;



cardsArray.forEach( (card)=>{
  cardsArray.forEach( (card)=>{
    card.addEventListener('click', ()=>{
      card.classList.add("flip");
      card.classList.add("showNum");
    });
  })
  card.addEventListener('click', (event)=>{
    console.log(event.target.dataset.number);
    emptyarray.push(event.target.dataset.number);
    complete.push(card);
    if (emptyarray.length === 2) {
        container.classList.add("stop");
          setTimeout(function(){
        container.classList.remove("stop");
        },1000);
      if (emptyarray[0] === emptyarray[1]) {
            complete[0].classList.add("completed");
            complete[1].classList.add("completed");
            emptyarray = [];
            complete = [];
            counter++
            if (counter === 9) {
              setTimeout(function(){
              window.alert('You are the best!');
              counter = 0;
            },1000);
            }
      } else {
          setTimeout(function(){
            complete[0].classList.remove("showNum");
            complete[0].classList.remove("flip");
            complete[1].classList.remove("flip");
            complete[1].classList.remove("showNum");
            emptyarray = [];
            complete = [];
        },700);
      }
    }
  })
})

//RESTART BUTTON, ADDS ANIMATION TO CARDS AND RANDOMIZE CARD POSISTION AGAIN

const button = document.querySelector('.restart');

cardsArray.forEach( (card)=>{
button.addEventListener('click', (event)=>{
  console.log('hej');
  card.classList.remove("flip");
  card.classList.remove("showNum");
  card.classList.remove("completed");
  card.classList.add("rotate");
  container.classList.add("shake-horizontal");
  emptyarray = [];
  complete = [];
  counter = 0;
  setTimeout(function(){
    container.classList.remove("shake-horizontal");
    card.classList.remove("rotate");

  },500);

  setTimeout(function(){
  for (var i = container.children.length; i >= 0; i--) {
         container.appendChild(container.children[Math.random() * i | 0]);
       }
     },500);
  })
})
