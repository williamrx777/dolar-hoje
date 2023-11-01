fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response => response.json())
.then(data => {
    console.log(data)
    document.querySelector('h2').textContent = `${data.USDBRL.name}`;
    document.querySelector('h3').textContent = `R$: ${parseFloat(data.USDBRL.ask).toFixed(2)}`;
})
.catch(error => {
    document.querySelector('h2').textContent = 'Name not found';
    document.querySelector('h3').textContent = 'Dolar not found';
    console.log('Error' + error);
});
