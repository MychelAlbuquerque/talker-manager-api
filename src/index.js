const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const talkerPath = path.resolve(__dirname, './talker.json');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const talkerData = await fs.readFile(talkerPath, 'utf-8');
  return res.status(HTTP_OK_STATUS).json(JSON.parse(talkerData));
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  let talkerData = await fs.readFile(talkerPath, 'utf-8');
  talkerData = JSON.parse(talkerData);
  const talker = talkerData[id - 1];
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(HTTP_OK_STATUS).json(talker);
});
