const cards = document.querySelectorAll('.card')
// ADD FOREACH 
cards.forEach(card => {
  card.addEventListener('click',()=>{
    removeActiveClasses() // REMOVE FIRST ACTIVE CLASS
    card.classList.add('active') //THEN ADD NEW CLASS ACTIVE CLICK EVENT
  })
});
// REMOVE CLASS FUNCATION
function removeActiveClasses() {
  cards.forEach(card => {
    card.classList.remove('active') //REMOVE CLASS ACTIVE
  });
}