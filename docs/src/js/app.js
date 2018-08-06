import { CategoriesView } from './view/CategoriesView.js';
import { MainSlidesView } from './view/MainSlidesView.js';
import { SlideListsView } from './view/SlideListsView.js';
import { ContentsDetailView } from './view/ContentsDetailView.js'

import { CategoriesController } from './controller/CategoriesController.js';
import { MainSlidesController } from './controller/MainSlidesController.js';
import { SlideListsController } from './controller/SlideListsController.js';
import { ContentsDetailController } from './controller/ContentsDetailController.js';

import { MovieData } from './model/DataURL.js';
import { SlideListsModel } from './model/SlideListsModel.js';

const movieData = new MovieData();
const slideListsModel = new SlideListsModel(movieData)


const categoriesView = new CategoriesView();
const mainSlidesView = new MainSlidesView();
const slideListsView = new SlideListsView();
const contentsDetailView = new ContentsDetailView();


const categoriesController = new CategoriesController(categoriesView);
const mainSlidesController = new MainSlidesController(mainSlidesView, slideListsModel, movieData);
const slideListsController = new SlideListsController(slideListsView, slideListsModel);
const contentsDetailController = new ContentsDetailController(contentsDetailView)