document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio do formulário

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  // Validação simples
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  try {
    // Envia os dados de peso e altura para o backend
    const response = await fetch('/calcular-imc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ peso, altura }),
    });

    const data = await response.json();

    // Exibe o resultado
    if (data.imc) {
      document.getElementById('resultado').innerText = `Seu IMC é: ${data.imc}`;
    } else {
      document.getElementById('resultado').innerText = 'Erro ao calcular o IMC.';
    }
  } catch (error) {
    console.error('Erro ao se comunicar com o servidor:', error);
    document.getElementById('resultado').innerText = 'Erro ao calcular o IMC.';
  }
});
