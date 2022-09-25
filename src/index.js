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
    // const vote = vote_average
    // const two = Number(vote).toFixed(1)

    const template = films.map(({poster_path, popularity, vote_average, vote_count, original_title, genres}) => {
        console.log(popularity)})

    // const template = films.map(
    //     ({poster_path, popularity, vote_average, vote_count, original_title, genres}) => 
    //     {return `<div class="film-card">
    //     <img src="${poster_path}" alt="${overview}" loading="lazy" />
    //     <div class="info">
    //       <p class="info-item">
    //         <b>Likes:</b>
    //         <span class="info-item-value">${popularity}</span>
    //       </p>
    //       <p class="info-item">
    //         <b>Views:</b>
    //         <span class="info-item-value">${vote}</span>
    //       </p>
    //       <p class="info-item">
    //         <b>Comments:</b>
    //         <span class="info-item-value">${vote}</span>
    //       </p>
    //       <p class="info-item">
    //         <b>Downloads:</b>
    //         <span class="info-item-value">${original_title}</span>
    //       </p>
    //     </div>
    //   </div>`}).join('')
    //   films_box.insertAdjacentHTML('beforeend', template)

  }

