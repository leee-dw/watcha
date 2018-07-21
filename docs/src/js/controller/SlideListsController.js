import { loadData } from '../async.js';

export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getCategoriesData)
    // slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    // slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
    // this.listCount = 0;
  }

  initSlideLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }


  getCategoriesData(data) {
    this.slideListsView.bindRenderSlideTemplate(data.특징);
    this.slideListsModel.getTopRatedData(this.getMovieListData.bind(this));
    this.slideListsView.bindShowListController(this.showListController);
    this.slideListsView.bindHideListController(this.hideListController);
  }


  getMovieListData(data) {
    return this.slideListsView.bindRenderSlideListsTemplate(data.results);
  }


  showListController(event) {
    event.currentTarget.childNodes[3].id = 'show-btn'
    event.currentTarget.childNodes[5].id = 'show-btn'
  }


  hideListController(event) {
    event.currentTarget.childNodes[3].id = '';
    event.currentTarget.childNodes[5].id = '';
  }


  clickSlideListPrevBtn(event) {
    if (this.listCount < 0) { this.listCount += 75 };
    event.currentTarget.parentNode.childNodes[1].style.transform = `translate3d(${this.listCount}%, 0px, 0px)`;
  }


  clickSlideListNextBtn(event) {
    // if (this.listCount > -300) {
    //   this.listCount -= 80
    // } else {
    //   this.listCount = 0;
    // }

    // var slidesContents = document.querySelectorAll('.main__cinemas__list__body__slider__contents');
    // slidesContents.forEach((element, idx) => {
    //   if (element === event.currentTarget.parentNode.childNodes[1]) {
    //     console.log(slidesContents[idx]);
    //   }
    // })

    // console.log(event.currentTarget.parentNode.childNodes[1]);



    event.currentTarget.parentNode.childNodes[1].style.transform = `translate3d(${this.listCount}%, 0px, 0px)`;
  }

}