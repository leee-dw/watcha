export const categoriesTemplate = (data) => {
  return `
    <button class="left-nav__categories-list__filter__item">
      <span class="left-nav__categories-list__filter__text">${data.key}</span>
    </button>`
}


export const categoriesListTemplate = (data) => {
  return `
    <li class="left-nav__categories-list__filtered__item">
       <a class="filtered__item__link" href="#">${data}</a>
    </li>`
}


export const mainSlideTemplate = (data) => {
  return `
  <div class="content__container">
    <div class="content__image-container">
      <img src="https://image.tmdb.org/t/p/w1280${data.backdrop_path}" alt="" class="content__image-container__image">
      <div class="content__image-container__shadow-top"></div>
      <div class="content__image-container__shadow-left"></div>
    </div>
      <div class="content__image-container__shadow-bottom"></div>
    <div class="content__info">
      <h2 class="content__info__title">${data.title}</h2>
      <div class="meta__content">
        <span class="meta__content__year">${data.release_date}</span>
        <span class="meta__content__film-rate">15세</span>
        <span class="meta__content__running-time">123분</span>
      </div>
      <p class="content__synopsis">
        <span>${data.overview}</span>
      </p>
      <button class="content__wish">
        <i class="content__wish-icon material-icons">favorite_border</i>
        <span class="content__wish-text">&nbsp;보고싶어요</span>
      </button>
      <button class="content__meh">
        <i class="content__meh-icon material-icons">remove_circle_outline</i>
        <span class="content__meh-text">&nbsp;관심없어요</span>
      </button>
    </div>
    <a href="#" class="content__play">
      <i class="content__play__icon material-icons">play_circle_outline</i>
    </a>
  </div>`
}



export const slidesHeaderTemplate = (data) => {
  return `
    <div class="main__cinemas__list__header">
      <h5 class="main__cinemas__list__header__title">
        <span class="main__cinemas__list__header__title__text">${data.name}</span>
        <a href="" class="main__cinemas__list__header__show-more">
          <span class="main__cinemas__list__header__show-more__text">모두 보기</span>
          <i class="main__cinemas__list__header__show-more__icon material-icons">keyboard_arrow_right</i>
        </a>
      </h5>
    </div>
    <div class="main__cinemas__list__body">
      <div class="main__cinemas__list__body__container">
        <div class="main__cinemas__list__body__slider">  
          <div class="main__cinemas__list__body__slider__contents">
          </div>
          <button class="cinema__list__prev-btn"><i class="material-icons cinema__list__prev-btn__icon"> arrow_back_ios</i></button>
          <button class="cinema__list__next-btn"><i class="material-icons cinema__list__next-btn__icon"> arrow_forward_ios</i></button>
        </div>
      </div>
    </div>
    `
}

export const slidesBodyTemplate = (data) =>{
  return `
    <div class="main__cinemas__list__body__slider__contents__item">
      <div class="contents__item__content">
        <img class="contents__item__content__still-cut" src="https://image.tmdb.org/t/p/w500${data.backdrop_path}"></img>
        <div class="contents__item__content__overlay"></div>
        <div class="contents__item__content__title">
          <span class="contents__item__content__title__text">${data.title}</span>
        </div>
      </div>
    </div>
  `
}