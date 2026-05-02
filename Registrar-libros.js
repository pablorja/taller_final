const libros = [{titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", prestado: false}]

const crearLibro = () => {
    const titulo= prompt("Ingrese el titulo del libro")
    const autor= prompt("Ingrese el autor del libro")
    const prestado = false
    libros.push({ titulo, autor, prestado })
}

console.log(libros)