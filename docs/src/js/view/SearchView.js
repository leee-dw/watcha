import { $on, $qs, $qsa, $empty } from '../utils/helper.js';

export class SearchView {
  constructor() {
    this.searchBtn = $qs('.right-nav__search-btn');
    this.searchBtnTxt = $qs('.right-nav__search-btn__text');
    this.searchBtnIcon = $qs('.right-nav__search-btn__icon');
    this.searchInput = $qs('.right-nav__search-input');
    this.searchInputTxt = $qs('.right-nav__search-text');
  }

  activateSearchBar(selector = document) {
    $on(selector, 'click', event => {
      if (event.target == this.searchBtn || event.target == this.searchBtnTxt || event.target == this.searchBtnIcon || event.target == this.searchInputTxt) {
        this.searchBtn.classList.add('hide');
        this.searchInput.classList.remove('hide');
      } else {
        this.searchInputTxt.value = '';
        this.searchBtn.classList.remove('hide');
        this.searchInput.classList.add('hide');
      }
    });
  }

}