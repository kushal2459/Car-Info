
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0d0815790emsh46f5cb550ea810ap1b7ebcjsn3235e610deaa',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    }

    const response = await fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', { headers:headers, 
});
    const result = await response.json();

    return result;
}

