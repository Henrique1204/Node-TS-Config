import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ mensagem: 'Olá mundo' }));

app.listen(3333);
