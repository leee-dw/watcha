import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderMainSlidesTemplate } from '../template/slidesTmpl.js';


export class MainSlidesView {
  constructor() {
    this.slidesContainer = $qs('.main__slider__content');
    this.dots = $qsa(".nav__dots__item");
    this.prev = $qs(".nav__prev__arrow-icon");
    this.next = $qs('.nav__next__arrow-icon');
  }


  initDots() {
    this.dots[0].classList.add('checked');
  }


  bindHandleDots(handler) {
    this.dots.forEach((element, idx) => {
      element.addEventListener('click', handler.bind(this, idx));
    });
  }


  bindRenderTemplate(data) {
    this.slidesContainer.insertAdjacentHTML('beforeend', renderMainSlidesTemplate(data));
  }


  bindClickPrevBtn(handler) {
    $on(this.prev, 'click', handler.bind(this));
  }


  bindClickNextBtn(handler) {
    $on(this.next, 'click', handler.bind(this));
  }


  markSlidesLocation(target, showIdx, property) {
    target[showIdx].classList.add(property);
  }


  markDotsLocation(showIdx, property) {
    this.dots[showIdx].classList.add(property);
  }


  resetSlides(target, property) {
    target.forEach(element => element.classList.remove(property));
  }


  resetDots(property) {
    this.dots.forEach(element => element.classList.remove(property));
  }

}