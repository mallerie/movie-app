import angular from 'angular';

import { routerConfig } from './routes';

import { LayoutController } from './controllers/layout';
import { HomeController } from './controllers/home';
import { MovieController } from './controllers/movie';

import { MovieService } from './services/movieservice';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('LayoutController', LayoutController)
  .controller('MovieController', MovieController)

  .service('MovieService', MovieService)
  ;