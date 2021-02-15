const checkbox = document.querySelector('.toggle-btn');

checkbox.addEventListener('click', () => {
  const toggle = document.querySelector('.toggle');
  const circle = document.querySelector('.circle');
  if(checkbox.checked) {
    console.log('checked')
    circle.classList.toggle('checked');
    toggle.style.backgroundColor = 'green';
  } else {
    console.log('not checked')
    circle.classList.toggle('checked');
    toggle.style.backgroundColor = 'grey';
  }
});