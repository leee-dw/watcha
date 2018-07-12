import { loadData } from '../async.js';


export class SlideListsController {
  constructor(slideListsView, movieData) {
    this.slideListsView = slideListsView;
    this.movieData = movieData;
    slideListsView.bindShowListController(this.showListController.bind(this));
    slideListsView.bindHideListController(this.hideListController.bind(this));
    slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
    this.initSciFiMovieData(this.getMovieListData.bind(this));
    this.initOldPopMovieData(this.getMovieListData.bind(this));
    this.initSlideCategoriesLoad(this.getCategoriesData.bind(this))
  }


  initNowPlayingData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'now_playing', 1), handler.bind(this));
  }


  initPopularData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'popular', 1), handler.bind(this));
  }


  initTopRatedData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'top_rated', 1), handler.bind(this));
  }


  initOldPopMovieData(handler) {
    loadData(this.movieData.getOldPopDataURL('ko'), handler.bind(this));
  }

  initSciFiMovieData(handler) {
    loadData(this.movieData.getSciFiMoveURL('ko'), handler.bind(this));
  }


  initSlideCategoriesLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }


  getMovieListData(data) {
    return this.slideListsView.bindRenderTemplate(data.results);
  }


  getCategoriesData(data) {
    this.slideListsView.bindRenderCategoriesTemplate(data.특징);
  }


  showListController(event) {
    if (this.slideListsView.listCount === 0) {
      event.currentTarget.childNodes[5].id = 'show-btn';
    } else {
      event.currentTarget.childNodes[3].id = 'show-btn';
      event.currentTarget.childNodes[5].id = 'show-btn';
    }
  }


  hideListController(event) {
    event.currentTarget.childNodes[3].id = '';
    event.currentTarget.childNodes[5].id = '';
  }


  clickSlideListPrevBtn(event) {
    if (this.slideListsView.listCount < 0) {
      this.slideListsView.listCount += 75;
    }
    event.currentTarget.parentNode.childNodes[1].style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
  }


  clickSlideListNextBtn(event) {
    if (this.slideListsView.listCount > -300) {
      this.slideListsView.listCount -= 75;
    } else {
      this.slideListsView.listCount = 0;
    };
    event.currentTarget.parentNode.childNodes[1].style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
  }

}