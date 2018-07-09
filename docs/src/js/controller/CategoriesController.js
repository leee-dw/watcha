export class CategoriesController {
  constructor(categoriesView, model) {
    this.model = model;
    this.categoriesView = categoriesView;
    this.collapseExpandCategories();
    this.categoriesView.initLoad();
  }
    
  
  collapseExpandCategories() {
    const { expandCategories, collapseCategories, categoriesNavigation, categoriesLink, categoriesBox } = this.categoriesView;
    expandCategories(categoriesNavigation, categoriesLink, categoriesBox);
    collapseCategories(categoriesNavigation, categoriesBox);
  };

}

