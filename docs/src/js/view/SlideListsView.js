import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSliderTemplate, renderSlideListsTemplate } from '../template/slidesTmpl.js';


export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
    this.slideListPrevBtn = $qsa('.cinema__list__prev-btn');
    this.slideListNextBtn = $qsa('.cinema__list__next-btn');
  }

  bindRenderSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');

    cinemaSlideContents.forEach(element => {
      element.insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    })

  }


  bindRenderSlideTemplate(data) {
    this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSliderTemplate(data));
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
    this.slideListPrevBtn.forEach(element => {
      element.addEventListener('click', handler);
    })
  }


  bindClickSlideListNextBtn(handler) {
    this.slideListNextBtn.forEach(element => {
      element.addEventListener('click', handler)
    });
  }


}