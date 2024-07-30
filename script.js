


window.addEventListener('scroll', (event) => {
  let y = document.querySelector('.offer').getBoundingClientRect().top
  document.querySelector('.header').classList.toggle('header--visible', y + document.querySelector('.offer').clientHeight <= window.innerHeight && y >= -300);

})

window.addEventListener('DOMContentLoaded', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop > 400) {
    document.querySelector('.header').classList.remove('header--visible') 
  }
})

let getItems = (name) => {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]`)
  const checkboxesChecked = []

  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
       checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
      //  console.log(checkboxes[index].value);
    }
  }

  return checkboxesChecked
}

let setProgress = (width) => {
  document.querySelector('.help__progress-bar').style.width = `${width}%`
}

let globalStep = 0
let localStep = 0

document.querySelector('.help__form-btn--next').addEventListener('click', () => {
  const fields = document.querySelectorAll('input[type="radio"]:checked')
  const checkbox = document.querySelectorAll('input[type="checkbox"]')
  const values = {}

  checkbox.forEach(item => {
    const {name} = item
    values[name] = getItems(name)
  })

  fields.forEach(field => {
    const {name,value} = field
    values[name] = value
  })

  localStep++

  if (!!values.realization ) {
    globalStep = 1
    if (values.segment.length != 0 ){
      globalStep = 2
      if (values.intresting.length != 0){
        globalStep = 3
        if (!!values.time) {
          globalStep = 4
        }
      }
    }
  }

  if (localStep > globalStep) {
    localStep = globalStep
  }
  
  if (localStep === 1) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.remove('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(25)
  } else if (localStep === 2) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.remove('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(50)
  } else if (localStep === 3) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.remove('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(75)
  } else if (localStep === 4) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.remove('item--hidden')
    document.querySelector('.help__form-btn--next').classList.add('item--hidden')
    document.querySelector('.help__form-btn--submit').classList.remove('item--hidden')
    setProgress(100)
  } 
  
})

document.querySelector('.help__form-btn--prev').addEventListener('click', () => {
  console.log(localStep);
  // if (localStep === 1) {
  //   document.querySelector('.help__form-box--1').classList.remove('item--hidden')
  //   document.querySelector('.help__form-box--2').classList.add('item--hidden')
  //   setProgress(0)
  // } else if (localStep === 2) {
  //   document.querySelector('.help__form-box--2').classList.remove('item--hidden')
  //   setProgress(25)
  //   document.querySelector('.help__form-box--3').classList.add('item--hidden')
  // } else if (localStep === 3) {
  //   document.querySelector('.help__form-box--3').classList.remove('item--hidden')
  //   document.querySelector('.help__form-box--4').classList.add('item--hidden')
  //   setProgress(50)
  // } else if (localStep === 4) {
  //   document.querySelector('.help__form-box--4').classList.remove('item--hidden')
    // document.querySelector('.help__form-btn--next').classList.remove('item--hidden')
    // document.querySelector('.help__form-btn--submit').classList.add('item--hidden')
  //   document.querySelector('.help__form-box--5').classList.add('item--hidden')
  //   setProgress(75)
  // }
  if (localStep === 1) {
    document.querySelector('.help__form-box--1').classList.remove('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(0)
  } else if (localStep === 2) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.remove('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(25)
  } else if (localStep === 3) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.remove('item--hidden')
    document.querySelector('.help__form-box--4').classList.add('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    setProgress(50)
  } else if (localStep === 4) {
    document.querySelector('.help__form-box--1').classList.add('item--hidden')
    document.querySelector('.help__form-box--2').classList.add('item--hidden')
    document.querySelector('.help__form-box--3').classList.add('item--hidden')
    document.querySelector('.help__form-box--4').classList.remove('item--hidden')
    document.querySelector('.help__form-box--5').classList.add('item--hidden')
    document.querySelector('.help__form-btn--next').classList.remove('item--hidden')
    document.querySelector('.help__form-btn--submit').classList.add('item--hidden')
    setProgress(75)
  } 
  localStep--
  if (localStep < 0) {
    localStep = 0
  }

})

document.querySelector('.help__right').addEventListener('submit', (event) => {
  event.preventDefault()
  document.querySelector('.help__form-box--5').classList.add('item--hidden')
  document.querySelector('.help__form-box--end').classList.remove('item--hidden')
})