import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup } from './js/create-markup';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorElem = document.querySelector('.error');
const catInfo = document.querySelector('.cat-card');



fetchBreeds()
    .then(({ data }) => {
        const options = data
            .map(({ id, name }) => `<option value="${id}">${name}</option>`)
            .join('');
        breedSelect.innerHTML = options;
        new SlimSelect({
             select: breedSelect,
        });
        breedSelect.classList.remove('is-hidden');
    })
    .catch(error => {
        errorElem.classList.remove('is-hidden');
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(
        () => {
            loader.classList.add('is-hidden');
        });

function fetchCatCard(event) {
    const breedId = event.target.value;

    fetchCatByBreed(breedId)
        .then(response => {
            const markup = createMarkup(response.data[0]);
            catInfo.innerHTML = markup;
        })
        .catch(error => {
            Notify.failure(`Oops! ${error.message}`);
        })
        .finally(() => {
            loader.classList.add('is-hidden');
        });
};

breedSelect.addEventListener('change', fetchCatCard);