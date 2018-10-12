export default class {
  constructor({ url, categories, mainSlide, subSlides }) {
    this.url = url;
    this.categories = categories;
    this.mainSlide = mainSlide;
    this.subSlides = subSlides;
  }

  setView() {
    this.fetchSlides();
    this.fetchCategories();
  }


  async fetchManager(obj) {
    const database = await fetch(obj)
      .then(response => response.json())
      .then(json => json)
    return database;
  }


  fetchCategories() {
    this.fetchManager('./src/js/database.json')
      .then(database => {
        this.categories
          .render('categories', database.categories)
          .render('items', database.categories, 0)
          .bind('hover')
          .bind('detach')
          .bind('switch')
          .on('click', e => {
            if (e.target.tagName !== 'SPAN') return;
            this.parentEls = [...e.target.parentElement.parentElement.children];
            this.index = this.parentEls.indexOf(e.target.parentElement);
            this.categories.render('items', database.categories, this.index);
          })
      })
  }


  fetchSlides() {
    this.fetchManager(this.url.main)
      .then(database => {
        this.mainSlide
          .render('mainSlide', database.results)
          .bind('nextBtn')
          .bind('prevBtn')
          .bind('dots');
      })


    this.fetchManager('./src/js/database.json').then(database => {
      this.subSlides
        .render('slideHeader', database.genres)
    })


    Object.values(this.url).forEach(
      (values, idx) => this.fetchManager(values)
      .then((database) => {
        this.subSlides
          .render('subSlides', database.results, idx)
      })
    );
  }
}