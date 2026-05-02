// modulo usuarios

const registros = [{nombre:"pablo", email:"pablo.santamaria@upb.edu.com"}]

const crearusuario = () => {
    const nombre= prompt("Ingrese el nombre")
    const email= prompt("Ingrese el email")
    
    registros.push({ nombre, email, })
}
crearusuario()
console.log(registros)

