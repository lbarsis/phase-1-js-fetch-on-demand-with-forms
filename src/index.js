const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', e => {
    e.preventDefault()

    const input = document.querySelector('input#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(renderResults)

  })
}

function renderResults(movie) {
  const title = document.querySelector('section#movieDetails h4');
  const summary = document.querySelector('section#movieDetails p');

  title.innerText = movie.title;
  summary.innerText = movie.summary;
  movie.reset()
}

document.addEventListener('DOMContentLoaded', init);