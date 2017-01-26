function  FavoritesController (MovieService, $stateParams, $firebaseArray) {
  console.log("FavoritesController ran succesfully");

  let vm = this;

  function init() {
    let ref = firebase.database().ref();
    var favoritesRef = ref.child("favorites");
    vm.favorites = $firebaseArray(favoritesRef);
  }

  init();

}

FavoritesController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { FavoritesController };