import { MovieService } from "../services/movieservice";

function HomeController (MovieService, $http) {

  let vm = this;

  vm.movies = [];

  function init () {
    console.log("Home Controller Ran");

    MovieService.allMovies().then((resp) => {
      vm.movies = resp.data.Search;
      console.log(vm.movies);
    });

  }

  init();


}

HomeController.$inject = ['MovieService','$http'];
export { HomeController };

