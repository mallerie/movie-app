function  MovieController (MovieService, $stateParams, $firebaseArray) {
  console.log("Movie Controller ran succesfully");

  let vm = this;

  vm.movie = {};


  function init() {
    MovieService.getMovie($stateParams.imdbID).then((resp) => {
      vm.movie = resp.data;
    })
    console.log("got movie");  }

  init();


}

MovieController.$inject = ['MovieService', '$stateParams', '$firebaseArray'];
export { MovieController };