
window.addEventListener('scroll', (event) => {
  let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (posTop >= 396) {
    document.querySelector('.header').style.position = 'relative'
    document.querySelector('.dropdown-menu').classList.remove('show')
  } else {
    document.querySelector('.header').style.position = 'fixed'
  }
})