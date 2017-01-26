import { MovieService } from "../services/movieservice";


function HomeController (MovieService, $state, $firebaseArray) {
  let vm = this;

  vm.movies = [];

  vm.query = '';

  let ref = firebase.database().ref().child('favorites');
  let database = firebase.database();
  vm.favorites = $firebaseArray(ref);


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
      var id = ref.key;
      console.log("added record with id " + id);
      favorites.$indexFor(id); // returns location in the array

      // this.favorites = favorites;
    });

    // Get a key for a new Post.
    // let favorites = {};
    // let newPostKey = database.ref().child('favorites').push(data).key;
    // console.log(newPostKey);
    // $state.go('root.favorites');
    // console.log(favorites);
    // return database.ref().update(favorites);

  }

}


HomeController.$inject = ['MovieService','$state','$firebaseArray'];
export { HomeController };
