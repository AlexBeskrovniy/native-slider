const sliderTemplate = document.querySelector('[data-slider-template]');

customElements.define('x-slider', class extends HTMLElement {
    connectedCallback() {
        this.replaceChildren(...sliderTemplate.content.cloneNode(true).childNodes);
        this.slides = Array.from(this.querySelectorAll('[data-slide]'));
        this.navPrev = this.querySelector('[data-nav-prev]');
        this.navNext = this.querySelector('[data-nav-next]');
        this.steps = this.slides.length;
        this.stepSize = this.scrollWidth / this.steps;
        this.counter = { count: 0 };

        this.hideElem(this.navPrev);
        this.navNext.addEventListener('click', this.scrollToNext.bind(this));
        this.navPrev.addEventListener('click', this.scrollToPrev.bind(this));
    }

    hideElem(elem) {
        elem.setAttribute('hidden', '');
    }

    showElem(elem) {
        elem.removeAttribute('hidden');
    }

    scroll(count) {
        return this.scrollTo({
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
});