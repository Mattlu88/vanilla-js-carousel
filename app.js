const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let index = 0;
const nextIndex = () => index === data.length - 1 ? 0 : index + 1
const prevIndex = () => index === 0 ? data.length - 1 : index - 1

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const slideContainer = document.querySelector('.slide-container')

const createNextSlide = () => {
  const slide = createSlide(data[nextIndex()])
  slide.className = "slide"
  slide.className += " next"
  slideContainer.appendChild(slide)
  return slide
}

const createPrevSlide = () => {
  const slide = createSlide(data[prevIndex()])
  slide.className = "slide"
  slide.className += " prev"
  slideContainer.prepend(slide)
  return slide
}


const setSlideActive = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.className += ' active'
}

const setSlidePrev = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.className += ' prev'
}

const setSlideNext = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.className += ' next'
}

const handleClickNextBtn = () => {

  const prevSlide = document.querySelector('.prev')
  if (prevSlide) {
    slideContainer.removeChild(prevSlide)
  }

  const activeSlide = document.querySelector('.active')
  setSlidePrev(activeSlide)

  let nextSlide = document.querySelector('.next')
  if (!nextSlide) {
    nextSlide = createNextSlide()
  }
  setSlideActive(nextSlide)

  index = nextIndex()
  createNextSlide()

}

const handleClickPrevBtn = () => {
  const nextSlide = document.querySelector('.next')
  if (nextSlide) {
    slideContainer.removeChild(nextSlide)
  }

  const activeSlide = document.querySelector('.active')
  setSlideNext(activeSlide)

  let Slide = document.querySelector('.prev')
  if (!Slide) {
    Slide = createNextSlide()
  }
  setSlideActive(Slide)

  index = prevIndex()
  createPrevSlide()
}

nextBtn.addEventListener('click', handleClickNextBtn)
prevBtn.addEventListener('click', handleClickPrevBtn)

const createSlide = (value) => {
  const slide = document.createElement('div')
  slide.innerHTML = `<div><span>${value}</span></div>`
  return slide
}


const initSlides = () => {
  const slide = createSlide(data[index])
  setSlideActive(slide)
  slideContainer.appendChild(slide)
  createNextSlide()
  createPrevSlide()
}

initSlides();