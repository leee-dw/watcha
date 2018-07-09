import { loadData } from '../async.js';
import { $on, $qs, $qsa } from '../utils/helper.js';

export class MainSlidesController {
  constructor(mainSlidesView, movieData) {
    this.movieData = movieData;
    this.mainSlidesView = mainSlidesView;

    this.mainSlidesView.bindClickPrevBtn(this.clickPrevButton.bind(this));
    this.mainSlidesView.bindClickNextBtn(this.clickNextButton.bind(this));
    this.mainSlidesView.bindHandleDots(this.handleDots.bind(this));

    this.initMainSlidesLoad(this.getMovieData.bind(this));
    
    this.currentIdx = 0;
  }


  initMainSlidesLoad(handler) {
    loadData(this.movieData.getNowPlayingURL('ko', 1), handler.bind(this));
  }


  getMovieData(data) {
    const slidesMovieData = data.results.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    this.mainSlidesView.bindRenderTemplate(slidesMovieData);
    this.initSlides();
    this.mainSlidesView.initDots();
  }


  initSlides() {
    this.slides = $qsa('.content__container');
    this.totalIdx = this.slides.length;
    this.slides[0].classList.add('show');
  }


  handleDots(idx) {
    this.currentIdx = idx;
    this.handleSlide(this.currentIdx);
  }


  clickPrevButton() {
    this.currentIdx--;
    if (this.currentIdx < 0) {
      this.currentIdx = this.totalIdx - 1
    };
    this.handleSlide(this.currentIdx);
  }


  clickNextButton() {
    this.currentIdx++;
    this.handleSlide(this.currentIdx);
  }


  handleSlide(current) {
    current = current % this.totalIdx;
    this.mainSlidesView.resetSlides(this.slides, 'show');
    this.mainSlidesView.resetDots('checked');

    this.mainSlidesView.markSlidesLocation(this.slides, current, 'show');
    this.mainSlidesView.markDotsLocation(current, 'checked');
  }

}