function  MovieController (MovieService, $stateParams) {
  console.log("Movie Controller ran succesfully");

  let vm = this;

  vm.movie = {};

  function init() {
    MovieService.getMovie($stateParams.id).then((resp) => {
      vm.movie = resp.data;
    })
    console.log("got movie");
  }

  init();


}

MovieController.$inject = ['ContactService', '$stateParams'];
export { MovieController };