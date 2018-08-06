import { $on, $qs, $qsa } from '../utils/helper.js';

export class ContentsDetailView {
  constructor() {
    this.cinemaSlideLists = $qs('.main__cinemas__list');   
  }

  bindMouseOver(handler) {
    this.cinemaSlideLists.addEventListener('mouseover', handler);    
  }

  bindMouseLeave(handler) {
    this.cinemaSlideLists.addEventListener('mouseleave', handler);    
  }




}