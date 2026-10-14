let storage = []
const dataLama = localStorage.getItem('catatan-nama')

if (dataLama) {
    storage = JSON.parse(dataLama)
}

export function simpanData() {
    const inputan = document.getElementById('inputUsers')
    const namaBaru = inputan.value;

    if (namaBaru === '') {
        alert('Username Tidak Boleh Kosong!')
        return;
    }

    storage.push(namaBaru)

    localStorage.setItem('catatan-nama', JSON.stringify(storage))
    inputan.value = ''
}