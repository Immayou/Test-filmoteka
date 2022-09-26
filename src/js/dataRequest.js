export default class FilmsDataApiSearch {
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    async genreRequest () {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f19c93a33a6f9456f5109701414d5b41`);
        const films = await response.json();
        return films.results;
    }

    async request () {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f19c93a33a6f9456f5109701414d5b41&query=${this.searchQuery}&page=${this.page}`);
        const films = await response.json();
        return films.results;
    } 
    
    incrementPage() {
        this.page += 1; 
    }
    
    resetPage() {
        this.page = 1;
    }

    get query () {
        return this.searchQuery;
    }

    set query (newQuery) {
        return this.searchQuery = newQuery
    }

}