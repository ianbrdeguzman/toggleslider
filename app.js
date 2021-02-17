const checkbox = document.querySelector('.toggle-btn');

checkbox.addEventListener('click', () => {
  const toggle = document.querySelector('.toggle');
  const circle = document.querySelector('.circle');
  const body = document.querySelector('body');
  const github = document.querySelector('#github');

  if(checkbox.checked) {
    console.log('checked')
    circle.classList.toggle('checked');
    circle.innerHTML = '🌕';
    toggle.style.backgroundColor = '#2ecc71';
    body.style.backgroundColor = '#b8c6db';
    body.style.backgroundImage = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
    github.style.color = '#272727';
  } else {
    console.log('not checked')
    circle.classList.toggle('checked');
    circle.innerHTML = '🌑';
    toggle.style.backgroundColor = 'grey';
    body.style.backgroundColor = '#485461';
    body.style.backgroundImage = 'linear-gradient(315deg, #485461 0%, #28313b 74%)'
    github.style.color = '#f5f5f5';
  }
});