import { ambilData, simpanData } from "./localStorage.js";

const noteInput = document.getElementById('noteInput')
const button = document.getElementById('addBtn')
const notes = document.getElementById('noteList')

let data = ambilData() 

function tampilkanData() {
    notes.innerHTML = ''

    data.forEach((catatan, index) => {
        const li = document.createElement('li')
        li.textContent = catatan
        
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Hapus'
        removeBtn.addEventListener('click', () => {
            data.splice(index, 1)
            simpanData(data)
            tampilkanData()
        })
        
        li.appendChild(removeBtn)
        notes.appendChild(li)
    })
}

button.addEventListener('click', () =>{
    const catatan = noteInput.value.trim()


    if (catatan === '') return;

    data.push(catatan)

    simpanData(data)
    tampilkanData()

    noteInput.value = ''
})

tampilkanData()