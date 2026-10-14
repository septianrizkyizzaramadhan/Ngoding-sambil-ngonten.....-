import {getUsers} from './api.js'
import {simpanData} from './localStorage.js'
import {tampilkanUsers} from '../ui.js'

const inputUser = document.getElementById('inputUsers')
const btnSearch = document.getElementById('searchBtn')
const showAll = document.getElementById('showAll')
const container = document.getElementById('container')

let userProfile = []

btnSearch.addEventListener('click', async function () {
    const targetName = inputUser.value.toLowerCase();
    if (!targetName) return alert('Input nama!');

    container.innerHTML = `<p>Mencari: ${targetName}...</p>`;
    
    try {
        const allUsers = await getUsers(100); 
        const filtered = allUsers.filter(u => 
            u.name.first.toLowerCase().includes(targetName) ||
            u.name.last.toLowerCase().includes(targetName) ||
            u.email.toLowerCase().includes(targetName)
        );

        if (filtered.length === 0) {
            container.innerHTML = `<p>Username tidak tersedia!</p>`;
        } else {
            tampilkanUsers(filtered, container);
        }
    } catch (err) {
        container.innerHTML = err.message;
    }
});

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