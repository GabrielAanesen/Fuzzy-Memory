const cards = document.querySelectorAll('.card');


const cardArray = Array.from(cards);


const randomCard = Math.floor((Math.random() * cardArray.length) + 1);

// var randCat = "images/cat"+Math.floor((Math.random() * 3) + 1)+".jpg"
//
//
// var image = document.getElementsByClassName("cat");
// image[0].src = randCat;

emptyarray = [];
complete = [];

Array.from(cards).forEach( (card)=>{
  card.addEventListener('click', (event)=>{
    emptyarray.push(event.target.dataset.card);
    complete.push(card);
    card.classList.toggle("flip");
    card.classList.toggle("showNum");
    if (emptyarray.length == 2) {
      if (emptyarray[0] == emptyarray[1]) {
        console.log('ITS A MATCH!');
        complete[0].classList.add("completed");
        complete[1].classList.add("completed");
        emptyarray = [];
        complete = [];
      } else {
        console.log("try again");
        complete[0].classList.remove("flip");
        complete[1].classList.remove("flip");
        complete[0].classList.remove("showNum");
        complete[1].classList.remove("showNum");
        // setTimeout(function(){
        //   complete = [];
        //
        //
        // },1000);

        emptyarray = [];
        complete = [];

      }
    }
  })
})

const button = document.querySelector('button');

Array.from(cards).forEach( (card)=>{
  button.addEventListener('click', (event)=>{
    card.classList.remove("flip");
    card.classList.remove("showNum");
    card.classList.remove("completed");
    })
    })
