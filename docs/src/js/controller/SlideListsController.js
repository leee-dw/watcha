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
    this.slideListsView.bindRenderSlideTemplate(data.genres);
    this.slideListsModel.getDavidLynchMovieData(this.getFirstMovieListData.bind(this));
    this.slideListsModel.getOldPopMovieData(this.getSecondMovieListData.bind(this));
    this.slideListsModel.getSciFiMovieData(this.getThridMovieListData.bind(this));
    this.slideListsModel.getPopularData(this.getFourthMovieListData.bind(this));
    this.slideListsModel.getDramaMovieData(this.getFifthMovieListData.bind(this));
    this.slideListsModel.getComedyMovieData(this.getSixthMovieListData.bind(this));
    this.slideListsModel.getBradPittMovieData(this.getSeventhMovieListData.bind(this));
    this.slideListsModel.getKieslowskiMovieData(this.getEighthMovieListData.bind(this));
    this.slideListsView.bindShowListController(this.showListController);
    this.slideListsView.bindHideListController(this.hideListController);
  }


  getFirstMovieListData(data) {
    return this.slideListsView.bindRenderFirstSlideListsTemplate(data.results);
  }


  getSecondMovieListData(data) {
    return this.slideListsView.bindRenderSecondSlideListsTemplate(data.results);
  }


  getThridMovieListData(data) {
    return this.slideListsView.bindRenderThirdSlideListsTemplate(data.results);
  }


  getFourthMovieListData(data) {
    return this.slideListsView.bindRenderFourthSlideListsTemplate(data.results);
  }


  getFifthMovieListData(data) {
    return this.slideListsView.bindRenderFifthSlideListsTemplate(data.results);
  }


  getSixthMovieListData(data) {
    return this.slideListsView.bindRenderSixthSlideListsTemplate(data.results);
  }


  getSeventhMovieListData(data) {
    return this.slideListsView.bindRenderSeventhSlideListsTemplate(data.results);
  }


  getEighthMovieListData(data) {
    return this.slideListsView.bindRenderEighthSlideListsTemplate(data.results);
    
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