import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';
import { renderSlideListsTemplate } from '../template/slidesTmpl.js';

export class SlideListsView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list__body__slider');
    this.cinemaSlideContents = $qs('.main__cinemas__list__body__slider__contents');
    this.slideListPrevBtn = $qs('.cinema__list__prev-btn');
    this.slideListNextBtn = $qs('.cinema__list__next-btn');
    this.listCount = 0;
    this.API = {
      korean: '&language=ko',
      api: '?api_key=64391ca210dbae0d44b0a622177ef8d3',
      state: 'https://api.themoviedb.org/3/discover/movie',
    }
  }


  bindInitSlideListsLoad(handler) {
    const { state, api, korean } = this.API;
    const movieDB = state + api + korean;
    loadData(movieDB, handler.bind(this));
  }


  bindRenderTemplate(data) {
    this.cinemaSlideContents.insertAdjacentHTML('beforeend', renderSlideListsTemplate(data));
  }

  bindShowListController(handler) {
    this.cinemaSlideLists.addEventListener('mouseover', handler);
  }

  bindHideListController(handler) {
    this.cinemaSlideLists.addEventListener('mouseleave', handler);
  }

  bindClickSlideListPrevBtn(handler) {
    this.slideListPrevBtn.addEventListener('click', e => {
      if (this.listCount >= -120) {
        this.listCount += 120;
        this.cinemaSlideContents.style.transform = `translate3d(${this.listCount}%, 0px, 0px)`;
      }
    });
  }

  bindClickSlideListNextBtn(handler) {
    this.slideListNextBtn.addEventListener('click', e => {
      if (this.listCount >= -240) {
        this.listCount -= 120;
        this.cinemaSlideContents.style.transform = `translate3d(${this.listCount}%, 0px, 0px)`;
      }
    });
  }

}