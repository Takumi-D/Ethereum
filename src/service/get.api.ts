const URL = "https://api.coingecko.com/api/v3/nfts/list";

async function getData(){
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (e){
        throw new Error(`${e}`);
    }
}

export default getData;