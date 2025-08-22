const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Nome
nameInput.addEventListener("invalid", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("⚠️ Por favor, digite seu nome.");
    } else if (this.validity.tooShort) {
        this.setCustomValidity("⚠️ O nome precisa ter pelo menos 2 caracteres.");
    }
});
nameInput.addEventListener("input", function () {
    this.setCustomValidity(""); // limpa ao digitar
});

// Email
emailInput.addEventListener("invalid", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("⚠️ O email é obrigatório.");
    } else if (this.validity.typeMismatch) {
        this.setCustomValidity("⚠️ Digite um email válido (ex: nome@exemplo.com).");
    }
});
emailInput.addEventListener("input", function () {
    this.setCustomValidity("");
});

// Textarea 
messageInput.addEventListener("invalid", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("⚠️ Escreva uma mensagem antes de enviar.");
    } else if (this.validity.tooLong) {
        this.setCustomValidity("⚠️ A mensagem não pode passar de 100 caracteres.");
    }
});
messageInput.addEventListener("input", function () {
    this.setCustomValidity("");
});