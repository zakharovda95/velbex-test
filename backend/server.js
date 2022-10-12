const express = require('express');

const workoutRouter = require('./src/routes/workout.routes.js');

const app = express();

app.use(express.json());

app.use('/api', workoutRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Сервер запущен!'));
