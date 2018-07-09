export class SlideListsController {
  constructor(slideListsView) {
    this.slideListsView = slideListsView;
    slideListsView.bindInitSlideListsLoad(this.getMovieListData.bind(this));
    slideListsView.bindShowListController(this.showListController.bind(this));
    slideListsView.bindHideListController(this.hideListController.bind(this));
    slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
  }

  getMovieListData(data) {
    const getSlideListsData = data.results;
    this.slideListsView.bindRenderTemplate(getSlideListsData);
  }

  showListController() {
    this.slideListsView.slideListPrevBtn.style.display = 'block';
    this.slideListsView.slideListNextBtn.style.display = 'block';
  }

  hideListController() {
    this.slideListsView.slideListPrevBtn.style.display = 'none';
    this.slideListsView.slideListNextBtn.style.display = 'none';
  }

  clickSlideListPrevBtn() {
    let { listCount, cinemaSlideContents } = this.slideListsView;
  }

  clickSlideListNextBtn() {
    let { listCount, cinemaSlideContents } = this.slideListsView;
  }

}