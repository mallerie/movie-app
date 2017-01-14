function  MovieController (MovieService, $stateParams) {
  console.log("Movie Controller ran succesfully");

  let vm = this;

  vm.movie = {};

  function init() {
    MovieService.getMovie($stateParams.imdbID).then((resp) => {
      vm.movie = resp.data;
    })
  }

  init();


}

MovieController.$inject = ['ContactService', '$stateParams'];
export { MovieController };