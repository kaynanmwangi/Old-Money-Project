document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const list = document.querySelector('ul');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function renderFavorites() {
        list.innerHTML = '';
        favorites.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <img src="${item.imageUrl}" alt="${item.name}" style="width:400px; height:350px; object-fit:cover;">
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            list.appendChild(li);
        });
    }

    renderFavorites();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const description = form.querySelector('input[type="text"][required]:nth-of-type(2)').value;
        const imageUrl = form.querySelector('input[type="url"]').value;

        favorites.push({ name, description, imageUrl });
        localStorage.setItem('favorites', JSON.stringify(favorites));

        form.reset();
        renderFavorites();
    });

    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            renderFavorites();
        }
    });
});
