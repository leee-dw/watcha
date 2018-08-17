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
      event.target.parentNode.children[3].classList.add('visible');
      
      
      $prevAll(event.target.parentNode.parentNode).forEach(el => el.classList.add('has-negative-translate'));
      $nextAll(event.target.parentNode.parentNode).forEach(el => el.classList.add('has-positive-translate'));
      event.target.parentNode.children[3].childNodes[1].classList.add('content__preview-enter');

      $on(event.target.parentNode.children[3].childNodes[1], 'mouseleave', e => {
        setTimeout(() => {
          e.target.parentNode.classList.remove('visible')
        }, 300);
        e.target.parentNode.parentNode.children[1].classList.remove('point-out');
        e.target.classList.remove('content__preview-enter');
        e.target.parentNode.parentNode.parentNode.classList.remove('has-negative-translate', 'has-positive-translate');
        $nextAll(e.target.parentNode.parentNode.parentNode)
          .concat($prevAll(e.target.parentNode.parentNode.parentNode))
          .forEach(el => {
            el.classList.remove('has-negative-translate', 'has-positive-translate');
          });
      })
    };
  }


}