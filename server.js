const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Função para calcular o IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Rota POST para calcular o IMC
app.post('/calcular-imc', (req, res) => {
  const { peso, altura } = req.body;
  
  if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
    return res.status(400).send({ error: 'Peso e altura são obrigatórios e devem ser números válidos.' });
  }
  
  const imc = calcularIMC(peso, altura);
  res.send({ imc: imc.toFixed(2) });
});

// Rota para a página principal (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
