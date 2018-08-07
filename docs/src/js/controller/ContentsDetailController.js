import { $on, $qs, $qsa } from '../utils/helper.js';

export class ContentsDetailController {
  constructor(contentsDetailView) {
    this.contentsDetailView = contentsDetailView;
    this.cinemaList = $qs('.main__cinemas__list');

    this.getInit();
  }


  getInit() {
    this.cinemaList.addEventListener('mouseover', this.expandDetail.bind(this));
  }

  expandDetail(event) {
    if (event.target.className == 'contents__item__content__overlay') {
      event.target.style.backgroundColor = '#888';
      event.target.style.opacity = '0.3';

      event.target.addEventListener('mouseleave', e => {
        event.target.style.backgroundColor = '';
        event.target.style.opacity = '1'
      })
    }
  }

}