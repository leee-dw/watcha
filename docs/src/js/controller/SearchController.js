export class SearchController {
  constructor(searchView) {
    this.searchView = searchView;
    this.searchView.activateSearchBar(document);
  }
}