
function setCredentials(event) {
    event.preventDefault();
    var inputEmail = document.getElementById("email","nome");
    localStorage.setItem("email","nome", inputEmail.value);
    document.getElementById("form").reset();


}

