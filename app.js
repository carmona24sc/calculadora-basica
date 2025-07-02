function calcular(operador) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultado = 0;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    default:
      resultado = 'Operación inválida';
  }

  document.getElementById("resultado").textContent = resultado;
}
