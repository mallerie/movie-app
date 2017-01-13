import angular from 'angular';

import { routerConfig } from './routes';

import { HomeController } from './controllers/home';
import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  ;