const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const talkerPath = path.resolve(__dirname, './talker.json');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const { talkValidation, rateValidation } = require('./middlewares/talkValidation');

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
// ---------------------------------------------------

app.get('/talker', async (req, res) => {
  const talkerData = await fs.readFile(talkerPath, 'utf-8');
  return res.status(HTTP_OK_STATUS).json(JSON.parse(talkerData));
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkersData = JSON.parse(await fs.readFile(talkerPath));
  const talker = talkersData[id - 1];
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(HTTP_OK_STATUS).json(talker);
});

app.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(HTTP_OK_STATUS).json({ token });
});

app.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  rateValidation, async (req, res) => {
    const { name, age, talk } = req.body;
    const talkersData = JSON.parse(await fs.readFile(talkerPath));
    const newTalker = { id: talkersData.length + 1, name, age, talk };
    talkersData.push(newTalker);
    await fs.writeFile(talkerPath, JSON.stringify(talkersData));
    return res.status(201).json(newTalker);
  });

app.put('/talker/:id',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  rateValidation, async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    const { name, age, talk } = req.body;
    const newTalkerData = {
      id,
      name,
      age,
      talk,
    };
    const talkersData = JSON.parse(await fs.readFile(talkerPath));
    const talkerIndex = talkersData.findIndex((e) => e.id === id);
    talkersData[talkerIndex] = newTalkerData;
    await fs.writeFile(talkerPath, JSON.stringify(talkersData));
    return res.status(200).json(newTalkerData);
  });

app.delete('/talker/:id',
  tokenValidation, async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    const talkersData = JSON.parse(await fs.readFile(talkerPath));
    const talkerIndex = talkersData.findIndex((e) => e.id === id);

    talkersData.splice(talkerIndex, 1);

    await fs.writeFile(talkerPath, JSON.stringify(talkersData));
    return res.status(204).json();
  });
