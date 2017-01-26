import { SERVER } from "../server";

function MovieService ($http) {

  this.searchMovies = function (query) {
    let url = SERVER + "&s=" + query;
    return $http.get(url);
  };

  this.initMovies = function () {
    let url = SERVER + "&s=Star+Wars";
    return $http.get(url);
  };

  this.getMovie = function (id) {
    let url = SERVER + "&i=" + id;
    return $http.get(url);
  };

  this.getFavorites = function () {
    let url = "https://movie-app-96200.firebaseio.com/";
    return $http.get(url);
  }

}

MovieService.$inject = ['$http'];
export { MovieService };

