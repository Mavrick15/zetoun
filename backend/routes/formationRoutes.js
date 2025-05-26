
const express = require('express');
const router = express.Router();
const { 
  getFormations, 
  getFormationById,
  createFormation
} = require('../controllers/formationController');

// Formation routes
router.get('/', getFormations);
router.get('/:id', getFormationById);
router.post('/', createFormation);

module.exports = router;
