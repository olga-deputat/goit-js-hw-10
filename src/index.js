import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');



fetchBreeds()
    .then(({ data }) => {
        const options = data
            .map(({ id, name }) => `<option value="${id}>${name}</option>`)
            .join('');
        breedSelect.innerHTML = options;
        new SlimSelect({
             select: breedSelect,
        });
        breedSelect.classList.remove('is-hidden');
    })
    .catch(error => {
        error.classList.remove('is-hidden');
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(
        () => {
            loader.classList.add('is-hidden');
        });
    
breedSelect.addEventListener('change', fetchCatImg);

function fetchCatImg(e) {
    const breedId = e.target.value;
    console.log(breedId);
}
/* <div class="cat-info">
      <img
        id="cat-image"
        src=""
        alt="Cat Image"
      />
      <h3 id="cat-name"></h3>
      <p id="cat-description"></p>
      <p id="cat-temperament"></p>
    </div>
const catImage = document.getElementById('cat-image');
const catName = document.getElementById('cat-name');
const catDescription = document.getElementById('cat-description');
const catTemperament = document.getElementById('cat-temperament');
*/