import { loadData } from '../async.js';
import { $on, $qs, $qsa, $empty } from '../utils/helper.js';
import { renderCategoryListsTemplate, renderCategoriesTemplate } from '../template/filtersTmpl.js';


export class CategoriesView {
  constructor() {
    this.categoriesNavigation = $qs('.left-nav__categories');
    this.categoriesLink = $qs('.left-nav__categories-link');
    this.categoriesBox = $qs('.left-nav__categories-list');
    this.filterLists = $qs('.left-nav__categories-list__filtered-list');
    this.filter = $qs('.left-nav__categories-list__filter');
  }

  initLoad() {
    loadData('src/js/db.json', this.renderCategories.bind(this));
  }


  expandCategories(selector, link, box) {
    $on(selector, 'mouseover', event => {
      event.target === link && box.classList.add('active')
    });
  }


  collapseCategories(selector, box) {
    $on(selector, 'mouseleave', event => {
      if (event.target === box || event.target === selector) {
        box.classList.remove('active')
      };
    })
  }


  renderCategories(data) {
    this.filter.insertAdjacentHTML('beforeend', renderCategoriesTemplate(data.categories));
    this.filterLists.insertAdjacentHTML('beforeend', renderCategoryListsTemplate(data.categories[0].detail));
    this.switchCategoriesLists(data.categories);
  }


  switchCategoriesLists(category) {
    $on(this.filter, 'click', event => {
      $empty(this.filterLists);

      const filterByCategories = (object) => {
        return event.target.innerText === object.key && object.key;
      };

      let categoryListsTemplate = renderCategoryListsTemplate(category.filter(filterByCategories)[0].detail);
      return this.filterLists.insertAdjacentHTML('beforeend', categoryListsTemplate);
    });
  }
}