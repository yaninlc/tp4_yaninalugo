// Bienvenida en la página principal
document.getElementById('btnWelcome').addEventListener('click', function() {
    let name = prompt("¿Cómo te llamas?");
    if (name) {
        document.getElementById('greetingMessage').innerHTML = `¡Bienvenido ${name}!`;
    }
});

// Función para verificar edad en la galería
function checkAge() {
    let age = document.getElementById('ageInput').value;
    let message = age > 20 ? "Eres mayor de 20 años." : "Eres menor de 20 años.";
    document.getElementById('ageMessage').innerText = message;
}

// Función para iniciar las operaciones en la tabla
function startOperation(operation) {
    let num1 = prompt("Ingresa el primer número:");
    let num2 = operation === 'resta' || operation === 'multiplicacion' ? prompt("Ingresa el segundo número:") : null;
    
    if (operation === 'multiplicacion') {
        alert(`El resultado de la multiplicación es: ${num1 * num2}`);
    } else if (operation === 'exponente') {
        alert(`El resultado de elevar al cuadrado es: ${Math.pow(num1, 2)}`);
    } else if (operation === 'resta') {
        alert(`El resultado de la resta es: ${num1 - num2}`);
    }
}

  