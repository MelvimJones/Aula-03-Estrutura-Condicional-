function salvar() {
    let name = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let idade = document.getElementById("idade").value

    let tipo = document.querySelector("input[type=radio]:checked").value

    //console.log(name, email, idade, tipo)
    window.alert("Nome: " + name + " Email: " + email + " Idade: " + idade + " Tipo: " + tipo)

}