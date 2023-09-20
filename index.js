function validarFormulario() {
    var emailInput = document.getElementById("inputemail").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.getElementById("emailError"); // Elemento para a mensagem de erro

    if (!emailRegex.test(emailInput)) {
        emailError.textContent = "Por favor, insira um endereço de email válido.";
        return false;
    } else {
        emailError.textContent = ""; // Limpa a mensagem de erro se for válido
    }

    return true;
}