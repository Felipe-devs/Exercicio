function somar(op) {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(n1) || isNaN(n2)) {
        alert('Número inválidos!');
        return
    }

    var resultado;
        switch(op) {
        case '+':
        resultado = n1 + n2;
            break;
         case '-':
            resultado = n1 + n2;
            break;
    case '/':
            resultado = n1 + n2;
            break;
            case '*':
            resultado = n1 + n2;
            break;
        default:
            break;
        }
    alert('Resultado: ' + resultado);
}