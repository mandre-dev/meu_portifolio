const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


//------------------------ Validation Form ------------------------//

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

//------------------------ TEST LOCAL STORAGE ------------------------//

const form = document.getElementById("contacts") //take the form

form.addEventListener("submit", function(e) {
    e.preventDefault(); //prevent a page from loading
    
const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;

let saved = JSON.parse(localStorage.getItem("contatcs")) || [];// get old data or create empty array

saved.push({ name, email, message }); //add new message

localStorage.setItem("contacts", JSON.stringify(saved))

alert("Mensagem enviada com sucesso!✅")
form.reset(); //clear the data

})