const Router = require('express');
const router = new Router();

const workoutController = require('../controllers/workout.controller.js');

router.post('/table_data', workoutController.setData);
router.get('/table_data', workoutController.getData);
router.put('/table_data', workoutController.updateData);

module.exports = router;
