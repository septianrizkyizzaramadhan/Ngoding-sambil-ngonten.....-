const userContainer = document.querySelector('#user-container');

const htmlList = user.map(user =>   `
    <div class='card'>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    `).join('');

    userContainer.innerHTML = htmlList;