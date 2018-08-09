import { $on, $qs, $qsa, $empty } from '../utils/helper.js';

export class SearchView {
  constructor() {
    this.searchBtn = $qs('.right-nav__search-btn');
    this.searchInput = $qs('.right-nav__search-input');
  }

  activateSearchBar(selector) {
    $on(selector, 'click', event => {
      if (event.currentTarget == this.searchBtn) {
        this.searchBtn.classList.add('toggle');
        this.searchInput.classList.remove('toggle');
      } else {
        this.searchBtn.classList.remove('toggle');
        this.searchInput.classList.add('toggle');
      }
    });
  }

}