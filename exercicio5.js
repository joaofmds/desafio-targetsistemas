function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }
  return invertida;
}

// Exemplo
const exemplo = "Target Sistemas";
console.log(`String original: ${exemplo}`);
console.log(`String invertida: ${inverterString(exemplo)}`);