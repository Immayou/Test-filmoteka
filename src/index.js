const formInput = document.forms['search-form']
const input = formInput.elements['search_input']
console.log(formInput)

formInput.addEventListener('submit', onRenderInput)

function onRenderInput (evt) {
evt.preventDefault()

    const value = input.value
    console.log(value)
}

