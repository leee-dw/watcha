import { CategoriesView } from './view/CategoriesView.js';
import { CategoriesController } from './controller/CategoriesController.js';

import { MainSlidesView } from './view/MainSlidesView.js';
import { MainSlidesController } from './controller/MainSlidesController.js';

import { SlideListsView } from './view/SlideListsView.js';
import { SlideListsController } from './controller/SlideListsController.js';

import { MovieData } from './model/DataURL.js';
import { SlideListsModel } from './model/SlideListsModel.js';

const movieData = new MovieData();

const slideListsModel = new SlideListsModel(movieData)

const categoriesView = new CategoriesView();
const categoriesController = new CategoriesController(categoriesView);


const mainSlidesView = new MainSlidesView();
const mainSlidesController = new MainSlidesController(mainSlidesView, slideListsModel, movieData);


const slideListsView = new SlideListsView();
const slideListsController = new SlideListsController(slideListsView, slideListsModel);