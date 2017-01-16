function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as search'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as home'
    })
    .state('root.movie', {
      url: '/movie/:imdbID',
      templateUrl: 'templates/movie.tpl.html',
      controller: 'MovieController as movie'
    })
    .state('root.favorites', {
      url: '/favorites',
      templateUrl: 'templates/favorites.tpl.html',
      controller: 'FavoritesController as faves'
    })

  $urlRouterProvider.otherwise('/');

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };