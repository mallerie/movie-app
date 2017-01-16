function  FavoritesController (MovieService, $stateParams, $firebaseArray) {
  console.log("FavoritesController ran succesfully");

  let vm = this;

  // vm.movie = {};
  let ref = firebase.database().ref();
  let database = firebase.database();
  vm.favorites = $firebaseArray(ref);



  function init() {
    return ref.once('value').then(function(snapshot) {
    var favorites = snapshot.val().favorites;
    console.log(favorites);
    });
  }

  init();




}

FavoritesController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { FavoritesController };