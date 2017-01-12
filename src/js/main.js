import angular from 'angular';
import 'angular-ui-router';

angular
  .module('app'['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  ;