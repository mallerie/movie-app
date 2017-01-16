function  FavoritesController (MovieService, $stateParams, $firebaseArray) {
  console.log("FavoritesController ran succesfully");

  let vm = this;



  // let ref = firebase.database().ref();
  // let database = firebase.database();
  // vm.favorites = $firebaseArray(ref);

  // console.log("Is firebase loaded? ", firebase, $firebaseArray);

  let database = firebase.database();
  // console.log("database is: ", database);

  let newRef = database.ref();
  // console.log("current ref is: ", newRef);

  vm.favorites = $firebaseArray(newRef);
  // console.log("favorites is: ", vm.favorites);



  function init() {
    MovieService.getFavorites().then((resp) => {
      console.log(resp);
    })
  }

  init();




    // return ref.once('value').then(function(snapshot) {
    // var favorites = snapshot.val().favorites;
    // console.log(favorites);
    // });
}

FavoritesController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { FavoritesController };