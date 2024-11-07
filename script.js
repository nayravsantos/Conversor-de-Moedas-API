const apiKey = '1c21a9ba9f18333a6897682a';
const apiURL = 'https://v6.exchangerate-api.com/v6${apiKey}/latest/';

// Função para consultar à taxa de câmbio via API
// ##############################################

async function getExchangeRate (daMoeda,paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();

        if(data.result === "sucess"){
            return data.conversion_rates [paraMoeda];
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch (error) {
        console.error("Erro:", error);
        return null;
    }
}
// ##############################################

document.getElementById('currency-form').addEventListener('submit', async function(event){

    // Taxas de câmbio fixas
const exchangeRates = {
    'USD': { 'USD': 1, 'EUR': 0.93, 'BRL': 5.70 },
    'EUR': { 'USD': 1.08, 'EUR': 1, 'BRL': 6.16 },
    'BRL': { 'USD': 0.18, 'EUR': 0.16, 'BRL': 1 }
};

document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('daMoeda').value;
    const toCurrency = document.getElementById('paraMoeda').value;

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('from-currency').selectedIndex = 0;
    document.getElementById('to-currency').selectedIndex = 0;
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
    
    // Obter valores de entrada
    const valor= parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    if(exchangerate){
        const convertedValue = valor * exchangeRate;

        //console.log(convertedValue);

        const conversao = document.getElementById('conversao');
        conversao.textContent = `RESULTADO: ${convertedValue.toFixed(2)}${paraMoeda}`;
    } else{
        alert('Erro ao buscar a cotação. Tente novamente');
    }

       
});