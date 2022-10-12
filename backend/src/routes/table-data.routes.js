const Router = require('express');
const router = new Router();

const tableDataController = require('../controllers/table-data.controller.js');

router.post('/table_data', tableDataController.setData);
router.get('/table_data', tableDataController.getData);
router.put('/table_data', tableDataController.updateData);

module.exports = router;
