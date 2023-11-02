fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById('nomeDolar').textContent = `${data.USDBRL.name}`;
    document.getElementById('dolar').textContent = `R$: ${parseFloat(data.USDBRL.bid).toFixed(2)}`;
    document.getElementById('nomeEuro').textContent = `${data.EURBRL.name}`;
    document.getElementById('euro').textContent = `R$: ${parseFloat(data.EURBRL.bid).toFixed(2)}`;
    document.getElementById('NomebitCoin').textContent = `${data.BTCBRL.name}`;
    document.getElementById('bitCoin').textContent = `R$: ${parseFloat(data.BTCBRL.bid).toFixed(2)}`;
})
.catch(error => {
    document.getElementById('nomeDolar').textContent = 'Name not found';
    document.getElementById('dolar').textContent = 'Dolar not found';
    document.getElementById('nomeEuro').textContent = 'Name not found';
    document.getElementById('euro').textContent = 'Euro not found';
    document.getElementById('NomebitCoin').textContent = 'Name not found';
    document.getElementById('bitCoin').textContent = 'Bitcoin not found'
    console.log('Error' + error);
});

