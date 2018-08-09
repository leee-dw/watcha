import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSliderTemplate, renderSlideListsTemplate } from '../template/slidesTmpl.js';


export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
  }


  bindRenderSlideTemplate(data) {
    this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSliderTemplate(data));
  }

  
  bindRenderSlidesListsTemplate(data, idx) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[idx].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
  }


  bindShowListController(handler) {
    let cinemaSlideBodyLists = $qsa('.main__cinemas__list__body__slider')
    cinemaSlideBodyLists.forEach(element => element.addEventListener('mouseover', handler));
  }


  bindHideListController(handler) {
    let cinemaSlideBodyLists = $qsa('.main__cinemas__list__body__slider')
    cinemaSlideBodyLists.forEach(element => {
      element.addEventListener('mouseleave', handler);
    });
  }


  bindClickSlideListPrevBtn(handler) {
    let slideListPrevBtn = $qsa('.cinema__list__prev-btn');
    slideListPrevBtn.forEach(element => {
      element.addEventListener('click', handler);
    })
  }


  bindClickSlideListNextBtn(handler) {
    let slideListNextBtn = $qsa('.cinema__list__next-btn');
    slideListNextBtn.forEach(element => {
      element.addEventListener('click', handler)
    });
  }


}