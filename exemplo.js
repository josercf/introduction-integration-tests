// Variável não utilizada
var unusedVariable = "This is an unused variable.";

function duplicateFunction() {
    console.log("This function is duplicated.");
}

function duplicateFunction() {
    console.log("This function is duplicated.");
}

// Uso incorreto de igualdade
function checkEquality(a, b) {
    if (a == b) {
        console.log("They are equal.");
    }
}

// Função com alta complexidade ciclomática
function complexFunction(a) {
    if (a > 15) {
        return true;
    } else if (a < 10) {
        return false;
    } else {
        for (let i = 0; i < a; i++) {
            if (i === 3) {
                break;
            } else if (i === 7) {
                continue;
            }
        }
    }
    return null;
}

// Código não atingível
function unreachableCode() {
    return;
    console.log("This code is unreachable");
}

// Promessa sem tratamento de erro
function handlePromise() {
    new Promise((resolve, reject) => {
        resolve("Success!");
    });
}

handlePromise();
checkEquality(5, "5");
complexFunction(12);
