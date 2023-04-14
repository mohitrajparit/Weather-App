const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '722c78dc90mshaf3d288edac101ap17574ejsnda5962c4bb24',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




