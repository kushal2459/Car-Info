

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0d0815790emsh46f5cb550ea810ap1b7ebcjsn3235e610deaa',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers:headers, 
});
    const result = await response.json();

    return result;
}