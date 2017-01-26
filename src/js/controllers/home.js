import { MovieService } from "../services/movieservice";


function HomeController (MovieService, $state, $firebaseArray) {
  let vm = this;

  let ref = firebase.database().ref().child('favorites');

  function init () {

    MovieService.initMovies().then((resp) => {
      vm.movies = resp.data.Search;
    });

  }

  init();

  this.findMovies = function(query) {
    MovieService.searchMovies(query).then((resp) => {
      vm.movies = resp.data.Search;
      $state.go('root.home');
    });
  }

  this.addNewFavorite = function (movie) {

    let favorites = $firebaseArray(ref);
    favorites.$add({ 
        Title: movie.Title,
        Poster: movie.Poster,
        Year: movie.Year,
        imdbID: movie.imdbID
      }).then(function(ref) {
      $state.go('root.favorites');
    });

  }

}


HomeController.$inject = ['MovieService','$state','$firebaseArray'];
export { HomeController };
