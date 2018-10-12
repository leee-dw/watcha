import { mainSlideTemplate } from './template.js'
import View from './View.js';


export default class extends View {

  constructor(el) {
    super(el);
    this.index = 0;
  }


  bind(cmd, ...params) {

    const commands = {

      nextBtn: () => {
        this.delegate('.nav__next__arrow-icon', 'click', () => {
          const totalIdx = this.slides.length;
          this.index++;
          this.index = this.index % totalIdx;
          this.resetSlides(this.slides, 'show');
          this.resetSlides(this.dotsEl, 'checked');
          this.showMainSlide(this.index);
        })
      },


      prevBtn: () => {
        this.delegate('.nav__prev__arrow-icon', 'click', () => {
          const totalIdx = this.slides.length;
          this.index--;
          if (this.index < 0) this.index = totalIdx - 1;
          this.resetSlides(this.slides, 'show');
          this.resetSlides(this.dotsEl, 'checked');
          this.showMainSlide(this.index);
        })
      },


      dots: () => {
        const dots = this.qsa(".nav__dots__item");
        this.delegate('.nav__dots__item', 'click', (e) => {
          this.resetSlides(this.slides, 'show');
          this.resetSlides(this.dotsEl, 'checked');
          dots.forEach((el, idx) => {
            e.target === el && this.showMainSlide(idx);
          })
        })
      }


    }
    commands[cmd]();
    return this;
  }


  render(cmd, ...params) {
    const commands = {
      mainSlide: () => {
        this.mainSlide(...params);
      },
    }
    commands[cmd]();
    return this;
  }



  mainSlide(movieDB) {
    this.renderMainSlide(movieDB);
  }



  renderMainSlide(movieDB) {
    const mainSlide = this.qs('.main__slider__content');
    const mainSlideData = movieDB.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    
    this.dotsEl = this.qsa(".nav__dots__item");
    mainSlideData.forEach(elements => mainSlide.insertAdjacentHTML('beforeend', mainSlideTemplate(elements)));

    this.showMainSlide(this.index);
  }



  showMainSlide(idx) {
    this.slides = this.qsa('.content__container');
    this.slides[idx].classList.add('show');
    this.dotsEl[idx].classList.add('checked');
  }



  resetSlides(obj, property) {
    obj.forEach(elements => elements.classList.remove(property));
  }



}