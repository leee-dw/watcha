import { loadData } from '../async.js';

export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getCategoriesData)


  }

  initSlideLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }





  getCategoriesData(data) {
    this.slideListsView.bindRenderSlideTemplate(data.genres);
    this.slideListsModel.getDavidLynchMovieData(this.getFirstMovieListData.bind(this));
    this.slideListsModel.getOldPopMovieData(this.getSecondMovieListData.bind(this));
    this.slideListsModel.getSciFiMovieData(this.getThridMovieListData.bind(this));
    this.slideListsModel.getGodardMovieData(this.getFourthMovieListData.bind(this));
    this.slideListsModel.getPopularData(this.getFifthMovieListData.bind(this));
    this.slideListsModel.getComedyMovieData(this.getSixthMovieListData.bind(this));
    this.slideListsModel.getBradPittMovieData(this.getSeventhMovieListData.bind(this));
    this.slideListsModel.getKieslowskiMovieData(this.getEighthMovieListData.bind(this));

    this.slideListsView.bindShowListController(this.showListController);
    this.slideListsView.bindHideListController(this.hideListController);

    this.slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn);
    this.slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn);

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

  }


  clickSlideListNextBtn(event) {    
    event.currentTarget.parentNode.childNodes[1].style.transform = `translate3d(-100%, 0px, 0px)`
  }


}