export class MovieData {

  constructor() {
    this.url = 'https://api.themoviedb.org/3/movie/';
    this.key = '?api_key=64391ca210dbae0d44b0a622177ef8d3';
  }

  getDataURL(language, status, page) {
    return `${this.url}${status}${this.key}&language=${language}&page=${page}`
  }

  getDetailURL(movieId, language) {
    return `${this.url + movieId + this.key}&language=${language}`
  }

  getTrailerURL(movieId) {
    return `${this.url + movieId}/videos${this.key}`;
  }

}