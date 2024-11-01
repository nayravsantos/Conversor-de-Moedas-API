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