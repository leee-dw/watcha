export default class {
  constructor(categoriesView, model, slideListsModel, mainSlidesView, slideListsView, slideListsModel) {
    this.model = model;
    this.categoriesView = categoriesView;
    this.slideListsModel = slideListsModel;
    this.mainSlidesView = mainSlidesView;
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    
    this.categoriesView.expandCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesLink, this.categoriesView.categoriesBox);
    this.categoriesView.collapseCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesBox);
    this.categoriesView.initLoad();

  }
}