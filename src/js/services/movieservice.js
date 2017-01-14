import { SERVER } from "../server";

function MovieService ($http) {

  this.allMovies = function (title) {
    return $http.get(SERVER);
  };

  // this.getMovie = function (id) {
  //   let url = SERVER + id;
  //   return $http.get(url);
  // };

}

MovieService.$inject = ['$http'];
export { MovieService };

