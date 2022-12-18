// const slider = document.querySelector('[data-slider]');
// const slides = document.querySelectorAll('[data-slide]');
// const navPrev = document.querySelector('[data-nav-prev]');
// const navNext = document.querySelector('[data-nav-next]');

// const steps = Array.from(slides).length;

// const stepSize = slider.scrollWidth / steps; 

// let counter = 0;

// const hideElem = elem => elem.setAttribute('hidden', '');
// const showElem = elem => elem.removeAttribute('hidden');

// const scroll = (counter) => {
//     return slider.scrollTo({
//                 top: 0,
//                 left: stepSize * counter,
//                 behavior: 'smooth'
//             });
// }

// const scrollToNext = () => {
//     counter++;
//     counter <= 0 ? hideElem(navPrev) : showElem(navPrev);
//     counter >= steps - 1 ? hideElem(navNext) : showElem(navNext);
//     console.log(counter);
//     scroll(counter);
// }

// const scrollToPrev = () => {
//     counter--;
//     counter <= 0 ? hideElem(navPrev) : showElem(navPrev);
//     counter >= steps - 1 ? hideElem(navNext) : showElem(navNext);
//     console.log(counter);
//     scroll(counter);
    
// }

// hideElem(navPrev);
// navNext.addEventListener('click', scrollToNext);
// navPrev.addEventListener('click', scrollToPrev);