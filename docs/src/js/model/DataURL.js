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

  getDramaURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&with_genres=18&primary_release_year=2014`
  }
  
  getComedyURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&with_genres=35&primary_release_year=2014`
  }

  getBradPittURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&with_people=287&vote_count.gte=1000&sort_by=popularity.asc`
  }

  getKieslowskiURL(language) {
    return `${this.url}discover/movie${this.key}&language=${language}&with_crew=1126&sort_by=popularity.desc`
  }

  getDavidLynchURL(language) { 
    return `${this.url}discover/movie${this.key}&language=${language}&with_crew=5602&sort_by=popularity.desc`
  }
  
  getGodardURL(language) { 
    return `${this.url}discover/movie${this.key}&language=${language}&with_crew=3776&sort_by=popularity.desc`
  }

  // getDetailURL(movieId, language) {
  //   return `${this.movie_url + movieId + this.key}&language=${language}`
  // }


  // getTrailerURL(movieId) {
  //   return `${this.movie_url + movieId}/videos${this.key}`;
  // }
  

}