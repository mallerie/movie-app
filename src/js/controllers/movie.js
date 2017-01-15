function  MovieController (MovieService, $stateParams) {
  console.log("Movie Controller ran succesfully");

  let vm = this;

  vm.movie = {};

  function init() {
    MovieService.getMovie($stateParams.imdbID).then((resp) => {
      vm.movie = resp.data;
      console.log(resp.data, "<---This is the movie you clicked")
    })
    console.log("got movie");  }

  init();


}

MovieController.$inject = ['MovieService', '$stateParams'];
export { MovieController };