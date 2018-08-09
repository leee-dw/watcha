import { $on, $qs, $qsa } from '../utils/helper.js';

export class ContentsDetailController {
  constructor(contentsDetailView) {
    this.contentsDetailView = contentsDetailView;
    this.cinemaList = $qs('.main__cinemas__list');
    this.getInit();
  }


  getInit() {
    $on(this.cinemaList, 'mouseover', this.pointLists.bind(this));
  }


  pointLists(event) {
    if (event.target.className == 'contents__item__content__overlay') {
      event.target.classList.add('point-out');
      $on(event.target, 'mouseleave', (e) => {
        event.target.classList.remove('point-out');
        event.target.parentNode.parentNode.classList.remove('stretch')
      });
    };
  }


}