import { SERVER } from "../server";

function MovieService ($http) {

  this.allMovies = function (query) {
    console.log(query, "<----This is the query");
    let url = SERVER + "&s=" + query;
    return $http.get(url);
  };

  this.getMovie = function (id) {
    let url = SERVER + "&i=" + id;
    return $http.get(url);
  };

}

MovieService.$inject = ['$http'];
export { MovieService };

