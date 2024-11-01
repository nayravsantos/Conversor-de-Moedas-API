const apiKey = '1c21a9ba9f18333a6897682a';
const apiURL = 'https://v6${apiKey}.exchangerate-api.com/v6/1c21a9ba9f18333a6897682a/latest/USD';

// Função para consultar à taxa de câmbio via API
// ##############################################

async function getExchangeRate (daMoeda,paraMoeda){
    try{
        const response = await fetch(`${apiURL}`);
    }catch{

    }
}