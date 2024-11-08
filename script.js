const apiKey = '1c21a9ba9f18333a6897682a';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para consultar a taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if (data.result === "success") {
            return data.conversion_rates[paraMoeda];
        } else {
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}

// Evento para processar a conversão ao enviar o formulário
document.getElementById('currency-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Verifica se daMoeda e paraMoeda são iguais
    if (daMoeda === paraMoeda) {
        document.getElementById('result').innerText = `Resultado: ${valor.toFixed(2)} ${paraMoeda}`;
        return;
    }

    // Busca a taxa de câmbio usando a API
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    if (exchangeRate) {
        const convertedValue = valor * exchangeRate;
        document.getElementById('result').innerText = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        alert('Erro ao buscar a cotação. Tente novamente');
    }
});

// Evento para o botão de reset
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('daMoeda').selectedIndex = 0;
    document.getElementById('paraMoeda').selectedIndex = 0;
    document.getElementById('result').innerText = '';
});
