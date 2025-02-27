const verificarFibonacci = (numero) => {
  let a = 0, b = 1;
  while (b < numero) {
      [a, b] = [b, a + b];
  }
  return b === numero || numero === 0 ? "O número pertence à sequência de Fibonacci." : "O número NÃO pertence à sequência de Fibonacci.";
};

// Exemplos:
console.log(verificarFibonacci(10))
console.log(verificarFibonacci(100))
console.log(verificarFibonacci(40))
console.log(verificarFibonacci(67))
console.log(verificarFibonacci(1))
console.log(verificarFibonacci(98))
console.log(verificarFibonacci(22))