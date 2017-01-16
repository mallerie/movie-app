function  FavoritesController (MovieService, $stateParams, $firebaseArray) {
  console.log("FavoritesController ran succesfully");

  let vm = this;

  vm.movie = {};


  function init() {

  }

  init();




}

FavoritesController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { FavoritesController };