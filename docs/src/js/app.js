import { Model } from './model/Model.js';

import { CategoriesView } from './view/CategoriesView.js';
import { CategoriesController } from './controller/CategoriesController.js';

import { MainSlidesView } from './view/MainSlidesView.js';
import { MainSlidesController } from './controller/MainSlidesController.js';

import { SlideListsView } from './view/SlideListsView.js';
import { SlideListsController } from './controller/SlideListsController.js';

const model = new Model();

const categoriesView = new CategoriesView();
const categoriesController = new CategoriesController(categoriesView, model);

const mainSlidesView = new MainSlidesView();
const mainSlidesController = new MainSlidesController(mainSlidesView, model);

const slideListsView = new SlideListsView();
const slideListsController = new SlideListsController(slideListsView, model);