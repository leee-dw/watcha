import { $on, $qs, $qsa, $nextAll, $prevAll } from '../utils/helper.js';


export class ContentsDetailController {
  constructor(contentsDetailView) {
    this.contentsDetailView = contentsDetailView;
    this.cinemaList = $qs('.main__cinemas__list');
    this.initPointer();
  }



  initPointer() {
    $on(this.cinemaList, 'mouseover', this.pointLists.bind(this));
  }

  pointLists(event) {
    if (event.target.classList.contains('contents__item__content__overlay')) {
      event.target.classList.add('point-out');
      $prevAll(event.target.parentNode.parentNode).forEach(el => el.classList.add('has-negative-translate'));
      $nextAll(event.target.parentNode.parentNode).forEach(el => el.classList.add('has-positive-translate'));
      event.target.parentNode.children[3].childNodes[1].classList.add('content__preview-enter');

      $on(event.target, 'mouseleave', (evt) => {
        event.target.classList.remove('point-out');
        event.target.parentNode.parentNode.classList.remove('has-negative-translate', 'has-positive-translate');
        event.target.parentNode.children[3].childNodes[1].classList.remove('content__preview-enter');

        $nextAll(event.target.parentNode.parentNode)
          .concat($prevAll(event.target.parentNode.parentNode))
          .forEach(el => {
            el.classList.remove('has-negative-translate', 'has-positive-translate');
          });
      });
    };
  }


}