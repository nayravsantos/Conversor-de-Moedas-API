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