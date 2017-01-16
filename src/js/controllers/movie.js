function  MovieController (MovieService, $stateParams, $firebaseArray) {
  console.log("Movie Controller ran succesfully");

  let vm = this;

  vm.movie = {};

  let rootRef = firebase.database().ref();

  function init() {
    MovieService.getMovie($stateParams.imdbID).then((resp) => {
      vm.movie = resp.data;
    })
    console.log("got movie");  }

  init();

  this.addToFavorites = function () {

  }


}

MovieController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { MovieController };