function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
    })

  $urlRouterProvider.otherwise('/');

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };