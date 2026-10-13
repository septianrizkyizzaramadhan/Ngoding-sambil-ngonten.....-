export function tampilkanUsers(dataPengguna, containerElement) {
    containerElement.innerHTML = ''

    if(!Array.isArray(dataPengguna)){
        console.log('data bukan array', dataPengguna)
        return
    }

    dataPengguna.forEach(function(user){
        const card = document.createElement('div')
        card.classList.add('user-card')

        const nama = document.createElement('h2')
        nama.textContent = `Username: ${user.name.first} ${user.name.last}`

        const email = document.createElement('p')
        email.textContent = `Email: ${user.email}`

        const foto = document.createElement('img')
        foto.src = user.picture.large
        foto.alt = 'Photo profile pengguna'

        card.appendChild(nama)
        card.appendChild(email)
        card.appendChild(foto)

        containerElement.appendChild(card)
    })
}