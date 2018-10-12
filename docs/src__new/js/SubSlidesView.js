import View from './View.js';
import { slidesHeaderTemplate, slidesBodyTemplate } from './template.js'

export default class extends View {
  constructor(el) {
    super(el);
  }

  render(cmd, ...params) {
    const commands = {
      slideHeader: () => {
        this.renderSlideHeader(...params);
      },

      subSlides: () => {
        this.renderSubSlides(...params);
      }
    }

    commands[cmd]();
    return this;
  }


  renderSlideHeader(data) {
    this.slideHeader = this.qs('.main__cinemas__list');
    data.forEach(el => this.slideHeader.insertAdjacentHTML('beforeend', slidesHeaderTemplate(el)));
  }


  renderSubSlides(movieData, index) {
    this.slideContents = this.qsa('.main__cinemas__list__body__slider__contents');
    // this.slideContents[index].insertAdjacentHTML('beforeend', slidesBodyTemplate(el));
    // console.log(this.slideContents[index], index);
  }
}