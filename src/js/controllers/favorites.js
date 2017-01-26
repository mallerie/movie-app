function  FavoritesController (MovieService, $stateParams, $firebaseArray) {
  console.log("FavoritesController ran succesfully");

  let vm = this;

  vm.favorites = {};

  let ref = firebase.database().ref();
  var favoritesRef = ref.child("favorites");
  
  // let database = firebase.database();
  // vm.favorites = $firebaseArray(ref);

  // console.log("Is firebase loaded? ", firebase, $firebaseArray);

  // let database = firebase.database();
  // console.log("database is: ", database);


  // let newRef = database.ref();
  // console.log("current ref is: ", newRef);

  vm.favorites = $firebaseArray(favoritesRef);
  console.log("favorites is: ", vm.favorites);



  function init() {
    // Still figuring out how to read data from firebase.

    // MovieService.getFavorites().then((resp) => {
    //   vm.favorites = resp.data;
    //   console.log("THis is init", vm.favorites);
    // });
  }

  init();

}

FavoritesController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { FavoritesController };