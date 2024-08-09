window.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
    if (event.deltaY > 0) {
      document.querySelector('.header').classList.remove('header--visible')
    } else {
      document.querySelector('.header').classList.add('header--visible')
    }
  })