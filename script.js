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

// Código Professor
// document.getElementById('currency-form').addEventListener('submit', function(event){
   // event.preventDefault();

    // Obter valores de entrada informados pelo usúario
   // const valor = parseFloat(document.getElementById('amount').value);
   // const daMoeda = document.getElementById('daMoeda').value;
   // const paraMoeda = document.getElementById('paraMoeda').value;

    // Definir taxas de câmbio fixas
   // const exchangeRates = {
       // USD: { BRL: 5.70, EUR: 0.93 },
       // BRL: { USD: 0.18, EUR: 0.16 },
       // EUR: { USD: 1.08, BRL: 6.16 }
    // };

   // Conversão simples de moedas
   // let valorConvertido;
   // if(daMoeda === paraMoeda){
      // valorConvertido = valor;
   // }else{
       // valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
   // }

   // const conversao = document.getAnimations('result');
   // conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda} `;
// });

// const valor= parseFloat(document.getElementById('amount').value);
   // const daMoeda = document.getElementById('daMoeda').value;
  //  const paraMoeda = document.getElementById('paraMoeda').value;

   // const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    //if(exchangerate){
      //  const convertedValue = valor * exchangeRate;

        //console.log(convertedValue);

       // const conversao = document.getElementById('conversao');
       // conversao.textContent = RESULTADO: ${convertedValue.toFixed(2)}${paraMoeda};
   // } else{
      //  alert('Erro ao buscar a cotação. Tente novamente');
    //}

       
//});