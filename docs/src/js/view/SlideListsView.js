import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSlideListsTemplate, renderSlideHeaderTemplate } from '../template/slidesTmpl.js';


export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
    this.cinemaSlideBodyLists = $qsa('.main__cinemas__list__body__slider');
    this.cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    this.slideListPrevBtn = $qsa('.cinema__list__prev-btn');
    this.slideListNextBtn = $qsa('.cinema__list__next-btn');
    this.listCount = 0;
  }

  bindRenderTemplate(data) {
    this.cinemaSlideContents.forEach((elem, idx) => {    
      this.cinemaSlideContents[0].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
      this.cinemaSlideContents[1].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
      this.cinemaSlideContents[2].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    })
  }





  bindRenderCategoriesTemplate(data) {
    // this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSlideHeaderTemplate(data))
  }

  bindShowListController(handler) {
    this.cinemaSlideBodyLists.forEach(elem => elem.addEventListener('mouseover', handler));
  }


  bindHideListController(handler) {
    this.cinemaSlideBodyLists.forEach(elem => elem.addEventListener('mouseleave', handler));
  }


  bindClickSlideListPrevBtn(handler) {
    this.slideListPrevBtn.forEach(elem => {
      elem.addEventListener('click', handler);
    })
  }


  bindClickSlideListNextBtn(handler) {
    this.slideListNextBtn.forEach(elem => {
      elem.addEventListener('click', handler)
    });
  }


}