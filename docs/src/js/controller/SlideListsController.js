import { loadData } from '../async.js';

export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getSlideData);
    this.state = {
      startIdx: 0,
      currentIdx: 0,
      totalIdx: 0
    }
  }

  initSlideLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }

  getSlideData(data) {
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

    this.slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    this.slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
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

  showListController() {
    this.childNodes[3].id = 'show-btn'
    this.childNodes[5].id = 'show-btn'
  }

  hideListController() {
    this.childNodes[3].id = '';
    this.childNodes[5].id = '';
  }

  clickSlideListPrevBtn() {
    const target = event.currentTarget.parentNode.childNodes[1]
    target.prepend(target.children[target.children.length - 1]);
  }

  clickSlideListNextBtn() {
    const target = event.currentTarget.parentNode.childNodes[1]
    target.append(target.children[0]);
  }

}