import { $on, $qs, $qsa } from '../utils/helper.js';

export class ContentsDetailView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');
  }
  bindExpandDetail(handler) {
    this.cinemaSlideLists.addEventListener('mouseover', handler);
    
  }
}