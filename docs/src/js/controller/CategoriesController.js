export class CategoriesController {
  constructor(categoriesView, searchView) {
    this.categoriesView = categoriesView;
    this.searchView = searchView;
    this.categoriesView.expandCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesLink, this.categoriesView.categoriesBox);
    this.categoriesView.collapseCategories(this.categoriesView.categoriesNavigation, this.categoriesView.categoriesBox);
    this.categoriesView.initLoad();
    this.searchView.activateSearchBar(this.searchView.searchBtn);    
    this.searchView.activateSearchBar(this.searchView.searchInput);
    
  }
}