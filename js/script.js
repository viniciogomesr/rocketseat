function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
      html.classList.remove('light')
    } 
    else {
        html.classList.add('light')
    }
    // html.classList.toggle('light')

    
    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./images/avatar-light.png")
    }
    else {
        img.setAttribute("src", "./images/avatar.png")
    }

    const txt = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("alt", "Foto de Myke Brito sorrindo, usando óculos de lentes escuras, camisa preta e jaqueta cinza, barba e fundo degradê iniciando roxo na esquerda e ficando azul claro na direita.")
    }
    else {
        img.setAttribute("alt", "Foto de Myke Brito sorrindo, usando óculos de lestes claras, camisa preta e jaqueta cinza, barba e fundo degradê iniciando roxo na esquerda e ficando azul claro na direita.")
    }
}