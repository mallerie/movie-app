import { MovieService } from "../services/movieservice";


function HomeController (MovieService, $state) {
  let vm = this;

  vm.movies = [];

  vm.query = '';

  function init () {

    MovieService.initMovies().then((resp) => {
      vm.movies = resp.data.Search;
      console.log(vm.movies);
    });

  }

  init();

  this.findMovies = function(query) {

    MovieService.searchMovies(query).then((resp) => {
      vm.movies = resp.data.Search;
      console.log("find movies ran");
      $state.go('root.home');
    });
    
  }

}


HomeController.$inject = ['MovieService','$state'];
export { HomeController };
