import { loadData } from '../async.js';


export class SlideListsController {
  constructor(slideListsView, movieData) {
    this.slideListsView = slideListsView;
    this.movieData = movieData;

    slideListsView.bindShowListController(this.showListController.bind(this));
    slideListsView.bindHideListController(this.hideListController.bind(this));

    slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));

    this.initSlideListsLoad(this.slideListsView.getMovieListData.bind(this));
  }

  initSlideListsLoad(handler) {
    loadData(this.movieData.getNowPlayingURL('ko', 2), handler.bind(this));
  }
  

  showListController() {
    if (this.slideListsView.listCount === 0) {
      this.slideListsView.slideListNextBtn.style.display = 'block';
    } else {
      this.slideListsView.slideListPrevBtn.style.display = 'block';
      this.slideListsView.slideListNextBtn.style.display = 'block';
    }
  }


  hideListController() {
    this.slideListsView.slideListPrevBtn.style.display = 'none';
    this.slideListsView.slideListNextBtn.style.display = 'none';
  }


  clickSlideListPrevBtn() {
    if (this.slideListsView.listCount < 0) {
      this.slideListsView.listCount += 120;
      this.slideListsView.cinemaSlideContents.style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
    }
  }

  
  clickSlideListNextBtn() {
    if (this.slideListsView.listCount > -240) {
      this.slideListsView.listCount -= 120;
      this.slideListsView.cinemaSlideContents.style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
    }
  }

}