// Función para mostrar un mensaje de bienvenida al usuario
document.getElementById("btnWelcome").addEventListener("click", function() {
    let name = prompt("¡Hola! ¿Cuál es tu nombre?");
    
    if (name) {
        document.getElementById("greetingMessage").innerHTML = `¡Bienvenido, ${name}! Me alegra tenerte aquí.`;
    } else {
        document.getElementById("greetingMessage").innerHTML = "¡Bienvenido! No se proporcionó un nombre.";
    }
});
// Función para verificar la edad del usuario
function checkAge() {
    const age = document.getElementById("ageInput").value;
    const ageMessage = document.getElementById("ageMessage");

    if (age > 20) { // Mayor que 20
        ageMessage.innerHTML = "¡Eres mayor que 20 años!";
        ageMessage.style.color = "#4CAF50"; // Verde
    } else if (age == 20) { // Exactamente 20
        ageMessage.innerHTML = "¡Tienes 20 años!";
        ageMessage.style.color = "#FFEB3B"; // Amarillo
    } else if (age > 0) { // Menor que 20 pero mayor que 0
        ageMessage.innerHTML = "¡Eres menor a 20 años!";
        ageMessage.style.color = "#F44336"; // Rojo
    } else {
        ageMessage.innerHTML = "Por favor ingresa una edad válida.";
        ageMessage.style.color = "#FF5722"; // Naranja
    }
}
// Función para iniciar la operación
function startOperation(operation) {
    let resultMessage = document.createElement('p');
    resultMessage.style.color = 'red';
    resultMessage.style.fontFamily = 'Arial, sans-serif'; // Aseguramos que la fuente sea Arial

    if (operation === 'multiplicacion') {
        let num1 = prompt("Introduce el primer número para multiplicar:");
        let num2 = prompt("Introduce el segundo número para multiplicar:");
        
        if (num1 && num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            if (!isNaN(num1) && !isNaN(num2)) {
                let result = num1 * num2;
                resultMessage.innerHTML = `El resultado de la multiplicación es: ${result}`;
            } else {
                resultMessage.innerHTML = "Por favor, ingresa valores válidos.";
            }
        } else {
            resultMessage.innerHTML = "Por favor, ingresa los dos números.";
        }
    } 
    
    else if (operation === 'exponente') {
        let num = prompt("Introduce el número para elevar al cuadrado:");
        
        if (num) {
            num = parseFloat(num);
            
            if (!isNaN(num)) {
                let result = num * num;
                resultMessage.innerHTML = `El resultado de elevar al cuadrado es: ${result}`;
            } else {
                resultMessage.innerHTML = "Por favor, ingresa un valor válido.";
            }
        } else {
            resultMessage.innerHTML = "Por favor, ingresa un número.";
        }
    }

    else if (operation === 'resta') {
        let num1 = prompt("Introduce el primer número para restar:");
        let num2 = prompt("Introduce el segundo número para restar:");
        
        if (num1 && num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            if (!isNaN(num1) && !isNaN(num2)) {
                let result = num1 - num2;
                resultMessage.innerHTML = `El resultado de la resta es: ${result}`;
            } else {
                resultMessage.innerHTML = "Por favor, ingresa valores válidos.";
            }
        } else {
            resultMessage.innerHTML = "Por favor, ingresa los dos números.";
        }
    }

    // Agregar el mensaje al cuerpo de la página
    document.body.appendChild(resultMessage);
}

