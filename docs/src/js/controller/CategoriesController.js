export class CategoriesController {
  constructor(categoriesView) {
    this.categoriesView = categoriesView;
    this.categoriesView.expandCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesLink, this.categoriesView.categoriesBox);
    this.categoriesView.collapseCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesBox);
    this.categoriesView.initLoad();   
  }
}