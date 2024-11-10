function clima() {
    const cidade = document.getElementById('cidade').value
    const res = document.getElementById('resultado')

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=04ea6e737b50c79acb6fefbe73626cb7&lang=pt&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada')
            }
            return response.json()
        })
        .then(data => {
            const resultado = `
                <h2>${data.name} ${ data.sys.country }</h2>
                <p><img src="img/temperatura-alta.png" alt="Vitaly Gorbachev"> ${data.main.temp} °C</p>
                <p><img src="img/umidade.png" alt="Pixel Perfect"> ${data.main.humidity}%</p>
                <p><img src="img/vento.png" alt="Vitaly Gorbachev"> ${ data.wind.speed }/Kmh</p>
                <p>${data.weather[0].description}</p>
            `
            res.innerHTML = resultado
        })
        .catch(error => {
            res.innerHTML = `<p>${error.message}</p>`
        })
}