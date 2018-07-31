import { $on, $qs, $qsa } from '../utils/helper.js';
import { loadData } from '../async.js';


export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getSlideData);
    this.count = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    }

  }

  initSlideLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }

  getSlideData(data) {
    this.slideListsView.bindRenderSlideTemplate(data.genres);
    this.slideListsModel.getDavidLynchMovieData(this.getFirstMovieListData.bind(this));
    this.slideListsModel.getOldPopMovieData(this.getSecondMovieListData.bind(this));
    this.slideListsModel.getSciFiMovieData(this.getThridMovieListData.bind(this));
    this.slideListsModel.getGodardMovieData(this.getFourthMovieListData.bind(this));
    this.slideListsModel.getPopularData(this.getFifthMovieListData.bind(this));
    this.slideListsModel.getComedyMovieData(this.getSixthMovieListData.bind(this));
    this.slideListsModel.getBradPittMovieData(this.getSeventhMovieListData.bind(this));
    this.slideListsModel.getKieslowskiMovieData(this.getEighthMovieListData.bind(this));

    this.slideListsView.bindShowListController(this.showListController);
    this.slideListsView.bindHideListController(this.hideListController);

    this.slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    this.slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
  }


  getFirstMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFirstSlideListsTemplate(data.results);
  }

  getSecondMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSecondSlideListsTemplate(data.results);
  }

  getThridMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderThirdSlideListsTemplate(data.results);
  }

  getFourthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFourthSlideListsTemplate(data.results);
  }

  getFifthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFifthSlideListsTemplate(data.results);
  }

  getSixthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSixthSlideListsTemplate(data.results);
  }

  getSeventhMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSeventhSlideListsTemplate(data.results);
  }

  getEighthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderEighthSlideListsTemplate(data.results);
  }

  showListController() {
    this.childNodes[3].id = 'show-btn'
    this.childNodes[5].id = 'show-btn'
  }


  hideListController() {
    this.childNodes[3].id = '';
    this.childNodes[5].id = '';
  }



  clickSlideListPrevBtn() {
    const target = event.currentTarget.parentNode.childNodes[1];
    let slideLists = $qsa('.main__cinemas__list__body__slider__contents');
    let slideContentsWidth = $qs('.main__cinemas__list__body__slider__contents__item').clientWidth * 5;
    let slideContents = $qsa('.main__cinemas__list__body__slider__contents__item', target);
    let nodeArr = [...slideContents];
    let arr = [];

    for (var i = 0; i < slideContents.length; i += 5) {
      arr.push(nodeArr.slice(i, i + 5).reverse())
    }
    slideLists.forEach((list, idx) => {
      if (list === target) {
        this.count[idx]++;
        this.count[idx] = this.count[idx] % 4;
        target.style.transform = `translateX(${slideContentsWidth * this.count[idx]}px)`;
        target.classList.add('anime');

        if (this.count[idx] == 1) {
          arr[2].forEach(elem => {
            let clone = elem.cloneNode(true);
            list.prepend(clone);
          })
        }
        setTimeout(() => {
          this.count[idx] = 0
          target.style.transform = `translateX(-${slideContentsWidth * this.count[idx]}px)`;
          target.classList.remove('anime');
          for (var i = 0; i < 5; i++) {
            list.removeChild(list.children[list.children.length - 1]);
          }
        }, 525);
      }

    })
  }






  clickSlideListNextBtn() {

    const target = event.currentTarget.parentNode.childNodes[1];
    let slideLists = $qsa('.main__cinemas__list__body__slider__contents');
    let slideContentsWidth = $qs('.main__cinemas__list__body__slider__contents__item').clientWidth * 5;
    let slideContents = $qsa('.main__cinemas__list__body__slider__contents__item', target);
    let nodeArr = [...slideContents];
    let arr = [];

    for (var i = 0; i < slideContents.length; i += 5) {
      arr.push(nodeArr.slice(i, i + 5))
    }
    slideLists.forEach((list, idx) => {
      if (list === target) {
        this.count[idx]++;
        this.count[idx] = this.count[idx] % 4;
        target.style.transform = `translateX(-${slideContentsWidth * this.count[idx]}px)`;
        target.classList.add('anime');

        if (this.count[idx] == 3) {
          arr[0].forEach(elem => {
            let clone = elem.cloneNode(true);
            list.append(clone);
          })
          setTimeout(() => {
            this.count[idx] = 0
            target.style.transform = `translateX(-${slideContentsWidth * this.count[idx]}px)`;
            target.classList.remove('anime');
            for (var i = 0; i < 5; i++) {
              list.removeChild(list.children[list.children.length - 1]);
            }
          }, 525);
        }

      }
    })
  }

}