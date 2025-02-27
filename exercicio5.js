function inverterString(str) {
  return str.split('').reverse().join('');
}

// Exemplo
const exemplo = "Target Sistemas";
console.log(`String original: ${exemplo}`);
console.log(`String invertida: ${inverterString(exemplo)}`);