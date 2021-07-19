

function setCredentials(event) {
    event.preventDefault();

    
    
    var inputNome = document.getElementById("nome");
    var inputEmail = document.getElementById("email");
    if (inputNome.value && inputEmail.value !== ""){
    localStorage.setItem("nome", inputNome.value);
    localStorage.setItem("email", inputEmail.value);
    document.getElementById("form").reset();
        
	console.log(`esse é o inputNome ${inputNome}`)
	console.log(`esse é o inputDados ${inputEmail}`)
	console.log(`local1 $localStorage.getItem('nome')`)
	console.log(`local2 $localStorage.getItem('email')`);
    window.alert("E-mail cadastrado com sucesso!!")

}else{
    window.alert("Preencha o nome e o E-mail")
    
}


}
