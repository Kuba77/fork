function showCross(x) {
    x.classList.toggle("change");
  }
  function showMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }


const cardToggle = document.querySelectorAll('.programm_category');
cardToggle.forEach(el => {
  el.addEventListener('click', cardClickHandler);
})
function cardClickHandler(event) {
  if (event.target.parentNode.classList.contains('.programm_category') || event.target.classList.contains('.programm_category')) return; 
  document.querySelector('.programm_category.active').classList.remove('active');
  event.target.parentNode.classList.add('active');
}