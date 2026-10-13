import { ambilDataPengguna } from './api.js';
import { tampilkanPengguna } from './ui.js';

const button = document.getElementById('btn');
const container = document.getElementById('container');

let userProfile = [];

button.addEventListener('click', async function () {
    container.innerHTML = `<p>Memuat data...</p>`;
    button.disabled = true;

    try {
        userProfile = await ambilDataPengguna(3);
        tampilkanPengguna(userProfile, container);
    } catch (err) {
        container.innerHTML = `Terjadi kesalahan: ${err.message}`;
    } finally {
        button.disabled = false;
    }
});