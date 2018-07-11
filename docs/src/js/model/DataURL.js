export class MovieData {

  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.key = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
  }

  getMovieDataURL(language, status, page) {
    return `${this.url}movie/${status}${this.key}&language=${language}&page=${page}`
  }

  getOldPopDataURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&primary_release_date.lte=2000&sort_by=popularity.desc&vote_count.gte=50`
  }

  getSciFiMoveURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&with_genres=878&sort_by=vote_average.desc&vote_count.gte=50`
  }


  // getDetailURL(movieId, language) {
  //   return `${this.movie_url + movieId + this.key}&language=${language}`
  // }

  // getTrailerURL(movieId) {
  //   return `${this.movie_url + movieId}/videos${this.key}`;
  // }

}