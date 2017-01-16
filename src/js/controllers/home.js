import { MovieService } from "../services/movieservice";


function HomeController (MovieService, $state, $firebaseArray) {
  let vm = this;

  vm.movies = [];

  vm.query = '';

  let ref = firebase.database().ref();
  let database = firebase.database();
  vm.favorites = $firebaseArray(ref);


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

  this.addNewFavorite = function (movie) {
    console.log("Adding favorite...");
    let data = {
      Title: this.Title,
      Poster: this.Poster,
      Year: this.Year,
      imdbID: this.imdbID
      // Title: "movie title",
      // Poster: "this.Poster",
      // Year: "this.Year",
      // imdbID: "this.imdbID"
    };

    // Get a key for a new Post.
    let favorites = {};
    let newPostKey = database.ref().child('movie').push(data).key;
    console.log(newPostKey);
    console.log(favorites);
    return database.ref().update(favorites);

  }

}


HomeController.$inject = ['MovieService','$state','$firebaseArray'];
export { HomeController };
