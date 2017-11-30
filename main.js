const cards = document.querySelectorAll('.card');
const button = document.querySelector('button');

var container = document.querySelector('.container')
var emptyarray = [];
var complete = [];
var counter = 0;

for (var i = container.children.length; i >= 0; i--) {
       container.appendChild(container.children[Math.random() * i | 0]);
     }

Array.from(cards).forEach( (card)=>{
  console.log(counter);
  button.addEventListener('click', (event)=>{
    card.classList.remove("flip");
    card.classList.remove("showNum");
    card.classList.remove("completed");
    counter = 0;
    for (var i = container.children.length; i >= 0; i--) {
           container.appendChild(container.children[Math.random() * i | 0]);
         }
    })
  card.addEventListener('click', (event)=>{
    emptyarray.push(event.target.dataset.card);
    complete.push(card);
    card.classList.add("flip");
    card.classList.add("showNum");
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
            complete[1].classList.remove("flip");
            complete[1].classList.remove("showNum");
            complete[0].classList.remove("showNum");
            complete[0].classList.remove("flip");
            emptyarray = [];
            complete = [];
        },500);
      }
    }
  })
})

// const divArray = [
//   '<div class="card" data-card="1"><p>1</p></div>',
//   '<div class="card" data-card="1"><p>1</p></div>',
//   '<div class="card" data-card="2"><p>2</p></div>',
//   '<div class="card" data-card="2"><p>2</p></div>',
//   '<div class="card" data-card="3"><p>3</p></div>',
//   '<div class="card" data-card="3"><p>3</p></div>',
//   '<div class="card" data-card="4"><p>4</p></div>',
//   '<div class="card" data-card="4"><p>4</p></div>',
//   '<div class="card" data-card="5"><p>5</p></div>',
//   '<div class="card" data-card="5"><p>5</p></div>',
//   '<div class="card" data-card="6"><p>6</p></div>',
//   '<div class="card" data-card="6"><p>6</p></div>',
//   '<div class="card" data-card="7"><p>7</p></div>',
//   '<div class="card" data-card="7"><p>7</p></div>',
//   '<div class="card" data-card="8"><p>8</p></div>',
//   '<div class="card" data-card="8"><p>8</p></div>',
//   '<div class="card" data-card="9"><p>9</p></div>',
//   '<div class="card" data-card="9"><p>9</p></div>'
// ]
