const cards = document.querySelectorAll('.card');
const button = document.querySelector('button');

const cardsArray = Array.from(cards);
var container = document.querySelector('.container')

let counter = 0;

for (var i = container.children.length; i >= 0; i--) {
       container.appendChild(container.children[Math.random() * i | 0]);
     }

cardsArray.forEach( (card)=>{
  card.addEventListener('click', ()=>{
    card.classList.add("flip");
    card.classList.add("showNum");
  });
})

emptyarray = [];
complete = [];
counter = 0;

cardsArray.forEach( (card)=>{
  card.addEventListener('click', (event)=>{
    console.log(event.target.dataset.number);
    emptyarray.push(event.target.dataset.number);
    complete.push(card);
    // console.log(emptyarray);
    if (emptyarray.length === 2) {
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
        },500);
      }
    }
  })
})
cardsArray.forEach( (card)=>{
button.addEventListener('click', (event)=>{
  card.classList.remove("flip");
  card.classList.remove("showNum");
  card.classList.remove("completed");
  emptyarray = [];
  complete = [];
  counter = 0;
  container.classList.add("shake-horizontal");
  setTimeout(function(){
    container.classList.remove("shake-horizontal");
  },500);

  setTimeout(function(){
  for (var i = container.children.length; i >= 0; i--) {
         container.appendChild(container.children[Math.random() * i | 0]);
       }
     },500);
  })
})
