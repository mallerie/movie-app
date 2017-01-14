import { SERVER } from "../server";
console.log(SERVER);

function HomeController (MovieService, $http) {

  let vm = this;

  vm.movies = [];

  function init () {
    console.log("Home Controller Ran");

    MovieService.allMovies().then((resp) => {
      vm.movies = resp.data.Search;
      console.log(vm.movies);
    });

    // $http({
    //   method: 'GET',
    //   url: SERVER,
    // }).then((resp) => {
    //   console.log(resp.data);
    //   });

  }

  init();


}

HomeController.$inject = ['MovieService','$http'];
export { HomeController };

