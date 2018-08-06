export class CategoriesController {
  constructor(categoriesView, model) {
    this.model = model;
    this.categoriesView = categoriesView;
    this.categoriesView.expandCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesLink, this.categoriesView.categoriesBox);
    this.categoriesView.collapseCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesBox);
    this.categoriesView.initLoad();
  }
}