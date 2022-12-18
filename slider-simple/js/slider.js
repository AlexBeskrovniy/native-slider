class Slider {
    constructor() {
        this.slider = document.querySelector('[data-slider]');
        this.slides = document.querySelectorAll('[data-slide]');
        this.navPrev = document.querySelector('[data-nav-prev]');
        this.navNext = document.querySelector('[data-nav-next]');
        this.steps = Array.from(this.slides).length;
        this.stepSize = this.slider.scrollWidth / this.steps;
        this.counter = { count: 0 };
    }

    hideElem(elem) {
        elem.setAttribute('hidden', '');
    }

    showElem(elem) {
        elem.removeAttribute('hidden');
    }

    scroll(count) {
        return this.slider.scrollTo({
                    top: 0,
                    left: this.stepSize * count,
                    behavior: 'smooth'
                });
    }

    toggleButtonsDisplay(count) {
        count <= 0 ? this.hideElem(this.navPrev) : this.showElem(this.navPrev);
        count >= this.steps - 1 ? this.hideElem(this.navNext) : this.showElem(this.navNext);
    }

    scrollToNext() {
        this.counter.count = this.counter.count + 1;
        this.toggleButtonsDisplay(this.counter.count);
        this.scroll(this.counter.count);
    }
    
    scrollToPrev() {
        this.counter.count = this.counter.count - 1;
        this.toggleButtonsDisplay(this.counter.count);
        this.scroll(this.counter.count);
        
    }

    start(){
        this.hideElem(this.navPrev);
        this.navNext.addEventListener('click', this.scrollToNext.bind(this));
        this.navPrev.addEventListener('click', this.scrollToPrev.bind(this));
    };
}

const slider = new Slider();
slider.start();