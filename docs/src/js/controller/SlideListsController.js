import { loadData } from '../async.js';

export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    // slideListsView.bindShowListController(this.showListController.bind(this));
    // slideListsView.bindHideListController(this.hideListController.bind(this));
    slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
    this.initSlideCategoriesLoad(this.getCategoriesData.bind(this))
    this.slideListsModel.initPopularData(this.getMovieListData.bind(this));
    this.listCount = 0;
  }

  getCategoriesData(data) {
    this.slideListsView.bindRenderCategoriesTemplate(data.특징);
  }
  getMovieListData(data) {
    return this.slideListsView.bindRenderTemplate(data.results);
  }


  initSlideCategoriesLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }




  showListController(event) {
    // if (this.slideListsView.listCount === 0) {
    //   event.currentTarget.childNodes[5].id = 'show-btn';
    // } else {
    //   event.currentTarget.childNodes[3].id = 'show-btn';
    //   event.currentTarget.childNodes[5].id = 'show-btn';
    // }
    console.log(event);
    
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