import FilmsDataApiSearch from './js/dataRequest';

const formInput = document.forms['search-form']
const input = formInput.elements['search_input']
const films_box = document.querySelector('.films_box')

const filmsDataApiSearch = new FilmsDataApiSearch()

formInput.addEventListener('submit', onRanderDataRequestBtn)

async function onRanderDataRequestBtn (evt) {
evt.preventDefault()
filmsDataApiSearch.query = input.value
try {
    const getDataRequest = await filmsDataApiSearch.request().then(createMarkup)

  } catch (error) {
    console.log('1')
  }

}

function createMarkup (films) {
    const vote = vote_average
    const two = Number(vote).toFixed(1)

    const template = films.map(({poster_path, original_title, release_date, genres}) => {
      return `<div class="film-card">
           <img src="${poster_path}" alt="${overview}" loading="lazy" />
           <div class="info">
           <h1>${original_title}</h1>
           <p class="info-genres">${original_title}</p>
           <span class="info-slash">|</span>
           <p class="info-year"></p>
           </div>`})
      

    
      films_box.insertAdjacentHTML('beforeend', template)

  }

