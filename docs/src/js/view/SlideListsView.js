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
  }

  bindRenderTemplate(data) {
    let cinemaSlideContents = document.querySelectorAll('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents.forEach(elem => {
      elem.insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    })
  }


  bindRenderCategoriesTemplate(data) {
    this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSlideHeaderTemplate(data));
  }


  bindShowListController(handler) {
    // console.log(this.cinemaSlideBodyLists);

    // this.cinemaSlideBodyLists.forEach(element => {
    //   element.addEventListener('mouseover', handler);
    // });
  }


  bindHideListController(handler) {
    this.cinemaSlideBodyLists.forEach(element => {
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