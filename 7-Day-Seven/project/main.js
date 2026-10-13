import {getUsers} from './api.js'
import {simpanData} from './localStorage.js'
import {tampilkanUsers} from './ui.js'

const inputUser = document.getElementById('inputUsers')
const btnSearch = document.getElementById('searchBtn')
const showAll = document.getElementById('showAll')
const container = document.getElementById('container')

let userProfile = []

showAll.addEventListener('click', async function () {
    container.innerHTML = `<p>Memuat data...</p>`;
    showAll.disabled = true;

    try {
        userProfile = await getUsers(3);
        tampilkanUsers(userProfile, container);
    } catch (err) {
        container.innerHTML = `Terjadi kesalahan: ${err.message}`;
    } finally {
        showAll.disabled = false;
    }
});