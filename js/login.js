// Botão de registro
const buttonForm = document.getElementById('buttonForm');

// Identificadores de error
const nameError = document.getElementById('nameError'),
emailError = document.getElementById('emailError'),
passwordError = document.getElementById('passwordError')

const nameLabel = document.getElementById('nameLabel'),
emailLabel = document.getElementById('emailLabel'),
passwordLabel = document.getElementById('passwordLabel')

// Adiciona um ouvinte de evento para o botão
buttonForm.addEventListener('click', inputVerification)

function inputVerification() {
    // Inputs
    const emailInput = document.getElementById('email').value,
    passwordInput = document.getElementById('password').value

    // Regex's
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    passwordRegex = /^(?!.*\s).{8,}$/

    // Validações
        // Email
        if (!emailRegex.test(emailInput) || emailInput == "" || emailInput == null) {
            turnDisplayOn(emailError);
            console.log('error email')  
        } else {
            turnDisplayOff(emailError, emailLabel);
        }

        // Senha
        if (!passwordRegex.test(passwordInput) || passwordInput == "" || passwordInput == null) {
            turnDisplayOn(passwordError)
            console.log('error password')
        } else {
            turnDisplayOff(passwordError, passwordLabel)
        }   

        const nameInputValidation = document.getElementById('name')

        if(nameInputValidation) {
            const nameInput = nameInputValidation.value
            const nameRegex = /^.{3,16}$/

            if (!nameRegex.test(nameInput) || nameInput === "" || nameInput === null) {
                turnDisplayOn(nameError);
                console.log('error name');
            } else {
                turnDisplayOff(nameError, nameLabel);
            }
        }

        if ((nameInputValidation && nameInputValidation.value !== "") && emailRegex.test(emailInput) && passwordRegex.test(passwordInput)) {
            window.location.href = '../../../pages/login.html'
        } else if (!nameInputValidation && emailRegex.test(emailInput) && passwordRegex.test(passwordInput)) {
            window.location.href = '../../../pages/overview.html'
        }
}

// Mostrar ou não mostrar
function turnDisplayOn(element) {
    element.style.display = 'inherit';
    element.style.position = 'relative';
    element.style.top = '-23px';
    element.style.color = 'red';
}

function turnDisplayOff(element, element2) {
    element.style.display = 'none';
    element2.style.bottom = '60px';
}