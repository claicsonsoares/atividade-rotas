const express = require('express');
const app = express();
const PORT = 3000;

// 1. Rota simples com mensagem (/)
app.get('/', (req, res) => {
    res.send('Bem-vindo ao site da Marvel e DC!');
});

// 2. Rota específica para a Marvel (/marvel)
app.get('/marvel', (req, res) => {
    res.send('Este é o universo de heróis da Marvel.');
});

// 2. Rota específica para a DC (/dc)
app.get('/dc', (req, res) => {
    res.send('Este é o universo de heróis da DC.');
});

// Inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} (http://localhost:${PORT})`);
});