import { $on, $qs, $qsa } from '../utils/helper.js';
import { loadData } from '../async.js';


export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getSlideData);
    // this.count = {
    //   0: 1,
    //   1: 1,
    //   2: 1,
    //   3: 1,
    //   4: 1,
    //   5: 1,
    //   6: 1,
    //   7: 1,
    // }
    this.count = 0;
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
    // this.count++;
    // this.count = this.count % 4;
    // const target = event.currentTarget.parentNode.childNodes[1];
    // let slideLists = $qsa('.main__cinemas__list__body__slider__contents');
    // let slideContentsWidth = $qs('.main__cinemas__list__body__slider__contents__item').clientWidth * 5;
    // let slideContents = $qsa('.main__cinemas__list__body__slider__contents__item', target);
    // let nodeArr = [...slideContents];
    // let arr = [];

    // for (var i = 0; i < slideContents.length; i += 5) {
    // arr.push(nodeArr.slice(i, i + 5));
    // }

    // slideLists.forEach((list, idx) => {
    //   if (list === target) {
    //     arr[0].forEach(elem => {
    //       let clone = elem.cloneNode(true);
    //       list.prepend(clone);
    //       target.style.transform = `translateX(${slideContentsWidth * this.count}px)`;
    //       if (this.count === 2) {
    //         target.classList.remove('anime')
    //       } else {
    //         target.classList.add('anime')
    //       }

    //     })

    //     arr[1].forEach(elem => {
    //       let clone = elem.cloneNode(true);
    //       list.prepend(clone);
    //     })

    //     arr[2].forEach(elem => {
    //       let clone = elem.cloneNode(true);
    //       list.prepend(clone);
    //     })
    //   }


    // })

    // target.prepend(target.children[target.children.length - 1]);
  }






  clickSlideListNextBtn() {
    this.count++;
    this.count = this.count % 4;

    const target = event.currentTarget.parentNode.childNodes[1];
    let slideLists = $qsa('.main__cinemas__list__body__slider__contents');
    let slideContentsWidth = $qs('.main__cinemas__list__body__slider__contents__item').clientWidth * 5;
    let slideContents = $qsa('.main__cinemas__list__body__slider__contents__item', target);
    let nodeArr = [...slideContents];
    let arr = [];

    for (var i = 0; i < slideContents.length; i += 5) {
      arr.push(nodeArr.slice(i, i + 5));
    }

    slideLists.forEach((list, idx) => {
      if (list === target) {
        
        arr[0].forEach(elem => {
          let clone = elem.cloneNode(true);
          list.append(clone);
          target.style.transform = `translateX(-${slideContentsWidth * this.count}px)`;
          !this.count ? target.classList.remove('anime') : target.classList.add('anime');
        })

        arr[1].forEach(elem => {
          let clone = elem.cloneNode(true);
          list.append(clone);
        })

        arr[2].forEach(elem => {
          let clone = elem.cloneNode(true);
          list.append(clone);
        })
      }


    })
  }

}