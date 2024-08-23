fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response => response.json())
.then(data => {
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

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.innerText = 'Dark/Light';
    document.body.appendChild(toggleBtn);

    // Verificar se há uma preferência armazenada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Alternar entre dark e light mode
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Armazenar a preferência no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
