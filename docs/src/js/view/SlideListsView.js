import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSlideListsTemplate, renderSlideHeaderTemplate } from '../template/slidesTmpl.js';


export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
    this.cinemaSlideBodyLists = $qs('.main__cinemas__list__body__slider');
    this.cinemaSlideContents = $qs('.main__cinemas__list__body__slider__contents');
    this.slideListPrevBtn = $qs('.cinema__list__prev-btn');
    this.slideListNextBtn = $qs('.cinema__list__next-btn');
    this.listCount = 0;
  }

  bindRenderTemplate(data) {
    this.cinemaSlideContents.insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
  }
  
  bindRenderCategoriesTemplate(data) {
    this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSlideHeaderTemplate(data))
  }

  bindShowListController(handler) {
    this.cinemaSlideBodyLists.addEventListener('mouseover', handler);
  }


  bindHideListController(handler) {
    this.cinemaSlideBodyLists.addEventListener('mouseleave', handler);
  }


  bindClickSlideListPrevBtn(handler) {
    this.slideListPrevBtn.addEventListener('click', handler);
  }


  bindClickSlideListNextBtn(handler) {
    this.slideListNextBtn.addEventListener('click', handler);
  }


}