import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSliderTemplate, renderSlideListsTemplate } from '../template/slidesTmpl.js';


export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
    this.count = 0;
  }

  bindRenderSlideTemplate(data) {
    this.cinemaSlideLists.insertAdjacentHTML('afterbegin', renderSliderTemplate(data));
  }


  bindRenderFirstSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[0].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[0].classList.add('first-list');
  }


  bindRenderSecondSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[1].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[1].classList.add('second-list');
  }


  bindRenderThirdSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[2].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[2].classList.add('third-list');
  }


  bindRenderFourthSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[3].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[3].classList.add('fourth-list');
  }


  bindRenderFifthSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[4].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[4].classList.add('fifth-list');
  }


  bindRenderSixthSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[5].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[5].classList.add('sixth-list');
  }


  bindRenderSeventhSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[6].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[6].classList.add('seventh-list');
  }
  
  
  bindRenderEighthSlideListsTemplate(data) {
    let cinemaSlideContents = $qsa('.main__cinemas__list__body__slider__contents');
    cinemaSlideContents[7].insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
    cinemaSlideContents[7].classList.add('eighth-list');
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