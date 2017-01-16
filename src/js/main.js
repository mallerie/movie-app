// import angular from 'angular';

import { routerConfig } from './routes';

import { LayoutController } from './controllers/layout';
import { HomeController } from './controllers/home';
import { MovieController } from './controllers/movie';
import { FavoritesController} from './controllers/favorites'

import { MovieService } from './services/movieservice';

import 'angular-ui-router';


angular
  .module('app', ['ui.router','firebase'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('LayoutController', LayoutController)
  .controller('MovieController', MovieController)
  .controller('FavoritesController', FavoritesController)
  .service('MovieService', MovieService)
  ;