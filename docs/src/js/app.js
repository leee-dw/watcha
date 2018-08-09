import { CategoriesView } from './view/CategoriesView.js';
import { MainSlidesView } from './view/MainSlidesView.js';
import { SlideListsView } from './view/SlideListsView.js';
import { ContentsDetailView } from './view/ContentsDetailView.js'
import { SearchView } from './view/SearchView.js'

import { CategoriesController } from './controller/CategoriesController.js';
import { MainSlidesController } from './controller/MainSlidesController.js';
import { SlideListsController } from './controller/SlideListsController.js';
import { ContentsDetailController } from './controller/ContentsDetailController.js';

import { MovieData } from './model/DataURL.js';
import { SlideListsModel } from './model/SlideListsModel.js';

const categoriesView = new CategoriesView();
const mainSlidesView = new MainSlidesView();
const slideListsView = new SlideListsView();
const contentsDetailView = new ContentsDetailView();
const searchView = new SearchView();

const movieData = new MovieData();
const slideListsModel = new SlideListsModel(movieData)

const slideListsController = new SlideListsController(slideListsView, slideListsModel);
const categoriesController = new CategoriesController(categoriesView, searchView);
const mainSlidesController = new MainSlidesController(mainSlidesView, slideListsModel, movieData);
const contentsDetailController = new ContentsDetailController(contentsDetailView)