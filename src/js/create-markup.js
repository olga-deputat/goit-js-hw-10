export const createMarkup = ({ url, breeds }) => 
        ` <img
                class="cat-img"
                src="${url}"
                alt="${breeds[0].name}"
                width="600"
                height="auto"
            />
            <div class="cat-info">
                <h2 class="cat-title">${breeds[0].name}</h2>
                <p class="cat-text1">${breeds[0].description}</p>
                <p class="cat-text1 cat-text2">${breeds[0].temperament}</p>
            </div>`;