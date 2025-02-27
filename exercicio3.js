const fs = require('fs').promises;

const lerFaturamento = async () => {
  try {
      const data = await fs.readFile('faturamento-diario.json', 'utf-8');
      const jsonData = JSON.parse(data);

      const faturamentoArray = Object.values(jsonData).map(Number);

      return faturamentoArray;
  } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
      return null;
  }
};

const analisarFaturamento = (faturamento) => {
  const diasValidos = faturamento.filter(valor => valor > 0);

  if (diasValidos.length === 0) {
      console.log("Nenhum faturamento válido encontrado.");
      return;
  }

  const menorFaturamento = Math.min(...diasValidos);
  const maiorFaturamento = Math.max(...diasValidos);
  const mediaMensal = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
  const diasAcimaMedia = diasValidos.filter(valor => valor > mediaMensal).length;

  console.log(`Menor faturamento: R$${menorFaturamento}`);
  console.log(`Maior faturamento: R$${maiorFaturamento}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
};

(async () => {  
  const faturamento = await lerFaturamento();
  if (faturamento) {
      analisarFaturamento(faturamento);
  }
})();
